package com.example.ifitness.repositories;

import com.example.ifitness.models.MacrosGoal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MacrosGoalRepository extends JpaRepository<MacrosGoal, Long> {
    Optional<MacrosGoal> findById(Long id);


}
