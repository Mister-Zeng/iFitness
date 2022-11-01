package com.example.ifitness.services;

import com.example.ifitness.models.DailyEntry;
import com.example.ifitness.models.DailyMacros;
import com.example.ifitness.models.Exercise;
import com.example.ifitness.models.User;
import com.example.ifitness.repositories.DailyEntryRepository;
import com.example.ifitness.repositories.DailyMacrosRepository;
import com.example.ifitness.repositories.ExerciseRepository;
import com.example.ifitness.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.Objects;

@Slf4j
@Service
public class DailyEntryServiceImpl implements DailyEntryService {

    @Autowired
    DailyEntryRepository dailyEntryRepository;
    @Autowired
    ExerciseRepository exerciseRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    DailyMacrosRepository dailyMacrosRepository;

    @Override
    public DailyEntry addExercise(Exercise exercise) {
        return null;
    }


    @Override
    public DailyEntry getDailyEntry(Long userId, String date) {
        LocalDate localDate = LocalDate.parse(date);
        return dailyEntryRepository.findByUserIdAndDate(userId, localDate);
    }

    @Override
    @Transactional
    public DailyEntry createDailyEntry(DailyEntry dailyEntry, Long userId) {
        User user = userRepository
                .findById(userId)
                .get();

        user.getDailyEntry().add(dailyEntry);
        dailyEntry.setUser(user);
        dailyEntry.setDate(LocalDate.parse(dailyEntry.getDate().toString()));
        dailyEntryRepository.save(dailyEntry);

        DailyMacros dailyMacros = dailyEntry.getDailyMacros();
        dailyMacros.setDailyEntry(dailyEntry);
        dailyMacrosRepository.save(dailyMacros);

        dailyEntry.getExercise()
                .forEach( e -> {
                    e.setDailyEntry(dailyEntry);
                    exerciseRepository.save(e);
                });

        return dailyEntry;
    }


    @Override
    @Transactional
    public DailyEntry updateDailyEntry(DailyEntry dailyEntry, Long userId) {
//        DailyEntry entry = userRepository.findDailyEntryByUserIdAndDailyEntryId(userId, dailyEntry.getId(), dailyEntry);
//        entry.setDate(LocalDate.parse(dailyEntry.getDate().toString()));
//        entry.setDailyMacros(dailyEntry.getDailyMacros());
//        entry.setExercise(dailyEntry.getExercise());
//        entry.setWeight(dailyEntry.getWeight());

        DailyEntry entry = userRepository.findById(userId)
                .get()
                .getDailyEntry()
                .stream()
                .filter( e -> e.getId().equals(dailyEntry.getId()))
                .findFirst()
                .get();
        entry.setDate(LocalDate.parse(dailyEntry.getDate().toString()));
        entry.setDailyMacros(dailyEntry.getDailyMacros());
        entry.setExercise(dailyEntry.getExercise());
        entry.setWeight(dailyEntry.getWeight());

        exerciseRepository.saveAll(dailyEntry.getExercise());

        dailyMacrosRepository.save(dailyEntry.getDailyMacros());

        dailyEntry.setDate(LocalDate.parse(dailyEntry.getDate().toString()));
        dailyEntryRepository.save(dailyEntry);

        return dailyEntry;
    }


}
