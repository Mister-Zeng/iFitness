package com.example.ifitness.services;

import com.example.ifitness.models.Exercise;
import com.example.ifitness.repositories.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ExerciseServiceImpl implements ExerciseService {

    @Autowired
    ExerciseRepository exerciseRepository;

    @Override
    public void deleteExercise(Long id) {
        Optional<Exercise> exerciseFromDB = exerciseRepository.findById(id);

        if(exerciseFromDB.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can't find exercise with id " + id);
        }

        Exercise exercise = exerciseFromDB.get();

        exerciseRepository.delete(exercise);
    }
}
