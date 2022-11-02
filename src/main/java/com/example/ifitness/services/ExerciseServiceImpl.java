package com.example.ifitness.services;

import com.example.ifitness.models.Exercise;
import com.example.ifitness.repositories.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ExerciseServiceImpl implements ExerciseService {

    @Autowired
    ExerciseRepository exerciseRepository;

    @Override
    public void deleteExercise(Long id) {
        Exercise exercise = exerciseRepository.findById(id).get();
        exerciseRepository.delete(exercise);
    }
}
