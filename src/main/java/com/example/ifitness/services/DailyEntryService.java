package com.example.ifitness.services;

import com.example.ifitness.models.DailyEntry;

import java.util.List;

public interface DailyEntryService {


    DailyEntry getDailyEntry(Long userId, String date);

    DailyEntry createDailyEntry(DailyEntry entry, Long userId);

    DailyEntry updateDailyEntry(DailyEntry dailyEntry, Long userId);

    List<DailyEntry> getEntries(Long userId);
}
