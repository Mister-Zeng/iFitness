package com.example.ifitness.controllers;

import com.example.ifitness.models.User;
import com.example.ifitness.services.ExerciseService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/")
@RequiredArgsConstructor
public class ExerciseController {

    final private ExerciseService exerciseService;

    @DeleteMapping("/deleteExercise")
    public ResponseEntity<Object> delete(@Param("exerciseId") Long exerciseId) {
        exerciseService.deleteExercise(exerciseId);
        return new ResponseEntity<>( HttpStatus.OK);
    }
}
