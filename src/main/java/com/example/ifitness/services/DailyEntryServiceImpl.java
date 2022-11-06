package com.example.ifitness.services;

import com.example.ifitness.models.DailyEntry;
import com.example.ifitness.models.DailyMacros;
import com.example.ifitness.models.User;
import com.example.ifitness.repositories.DailyEntryRepository;
import com.example.ifitness.repositories.DailyMacrosRepository;
import com.example.ifitness.repositories.ExerciseRepository;
import com.example.ifitness.repositories.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

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
    public DailyEntry getDailyEntry(Long userId, String date) {
        LocalDate localDate = LocalDate.parse(date);
        return dailyEntryRepository.findByUserIdAndDate(userId, localDate);
    }

    @Override
    @Transactional
    public DailyEntry createDailyEntry(DailyEntry dailyEntry, Long userId) {
        Optional<User> userFromDB = userRepository.findById(userId);

        if(userFromDB.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can't find user with id " + userId);
        }

        User user = userFromDB.get();

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
        Optional<User> userFromDB = userRepository.findById(userId);

        if(userFromDB.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can't find user with id " + userId);
        }

        User user = userFromDB.get();

        dailyEntry.getExercise().forEach( e -> {
            e.setDailyEntry(dailyEntry);
            exerciseRepository.save(e);
        });

        dailyEntry.setDate(LocalDate.parse(dailyEntry.getDate().toString()));
        dailyEntry.setUser(user);

        dailyEntryRepository.save(dailyEntry);

        dailyEntry.getExercise()
                .forEach( e -> {
                    e.setDailyEntry(dailyEntry);
                    exerciseRepository.save(e);
                });

        dailyMacrosRepository.save(dailyEntry.getDailyMacros());

        return dailyEntry;
    }

    @Override
    public List<DailyEntry> getEntries(Long userId) {
        Optional<User> userFromDB = userRepository.findById(userId);

        if(userFromDB.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can't find user with id " + userId);
        }

        User user = userFromDB.get();

        return user.getDailyEntry();
    }

}
