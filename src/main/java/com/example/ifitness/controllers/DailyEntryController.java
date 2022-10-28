package com.example.ifitness.controllers;

import com.example.ifitness.repositories.ExerciseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/")
@RequiredArgsConstructor
public class DailyEntryController {

    @Autowired
    ExerciseRepository exerciseRepository;


}
