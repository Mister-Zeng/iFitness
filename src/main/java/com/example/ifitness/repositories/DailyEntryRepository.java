package com.example.ifitness.repositories;

import com.example.ifitness.models.DailyEntry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DailyEntryRepository extends JpaRepository<DailyEntry, Long> {
    List<DailyEntry> getDailyEntryById(Long id);
}
