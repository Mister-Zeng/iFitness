package com.example.ifitness.repositories;

import com.example.ifitness.models.MacrosGoal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MacrosGoalRepository extends JpaRepository<MacrosGoal, Long> {
    MacrosGoal getMacrosGoalById(Long id);


}
