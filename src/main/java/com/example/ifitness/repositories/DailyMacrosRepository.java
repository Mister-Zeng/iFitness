package com.example.ifitness.repositories;

import com.example.ifitness.models.DailyMacros;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyMacrosRepository extends JpaRepository<DailyMacros, Long> {
    DailyMacros findDailyMacrosById(Long id);
}
