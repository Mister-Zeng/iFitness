package com.example.ifitness.repositories;

import com.example.ifitness.models.DailyMacros;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DailyMacrosRepository extends JpaRepository<DailyMacros, Long> {
    Optional<DailyMacros> findById(Long id);
}
