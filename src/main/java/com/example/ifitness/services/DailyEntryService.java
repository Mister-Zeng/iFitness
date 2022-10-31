package com.example.ifitness.services;

import com.example.ifitness.models.DailyEntry;
import com.example.ifitness.models.Exercise;

import java.time.LocalDate;
import java.util.Date;

public interface DailyEntryService {

    DailyEntry addExercise(Exercise exercise);

    DailyEntry getDailyEntry(String username, String date);

    DailyEntry createDailyEntry(DailyEntry entry, String username);
}
