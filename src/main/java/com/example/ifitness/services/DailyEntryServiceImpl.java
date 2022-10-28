package com.example.ifitness.services;

import com.example.ifitness.models.DailyEntry;
import com.example.ifitness.models.Exercise;
import com.example.ifitness.repositories.DailyEntryRepository;
import com.example.ifitness.repositories.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DailyEntryServiceImpl implements DailyEntryService {

    @Autowired
    DailyEntryRepository dailyEntryRepository;
    @Autowired
    ExerciseRepository exerciseRepository;

    @Override
    public DailyEntry addExercise(Exercise exercise) {
        return null;
    }
}
