package com.example.ifitness.repositories;

import com.example.ifitness.models.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {

    @Query(value = "SELECT name, reps, sets, weight FROM exercises WHERE daily_entry_id = :id", nativeQuery = true)
    List<Exercise> findExerciseByDailyMacrosId(Long id);
}
