package com.example.ifitness.repositories;

import com.example.ifitness.models.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {

    Optional<Exercise> findById(Long id);

}
