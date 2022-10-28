package com.example.ifitness.services;

import com.example.ifitness.models.DailyEntry;
import com.example.ifitness.models.Exercise;

public interface DailyEntryService {

    DailyEntry addExercise(Exercise exercise);
}
