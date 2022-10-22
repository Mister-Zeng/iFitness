package com.example.ifitness.repositories;

import com.example.ifitness.models.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
    List<Exercise> getExerciseById(Long id);
}
