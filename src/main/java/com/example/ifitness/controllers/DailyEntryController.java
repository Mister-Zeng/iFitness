package com.example.ifitness.controllers;

import com.example.ifitness.models.DailyEntry;
import com.example.ifitness.repositories.ExerciseRepository;
import com.example.ifitness.services.DailyEntryService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Date;

@RestController
@RequestMapping(path = "/api/v1/")
@RequiredArgsConstructor
public class DailyEntryController {

    @Autowired
    DailyEntryService dailyEntryService;

    @GetMapping("/getDailyEntry")
    public ResponseEntity<DailyEntry> getDailyEntry(@RequestParam("username")  String username, @RequestParam String date) throws ResponseStatusException {
        DailyEntry dailyEntry = dailyEntryService.getDailyEntry(username, date);
        return new ResponseEntity<>(dailyEntry, HttpStatus.OK);
    }

    @PutMapping("/createDailyEntry")
    public ResponseEntity<DailyEntry> createDailyEntry(@RequestBody DailyEntry dailyEntry, @RequestParam("username") String username) throws ResponseStatusException {
        DailyEntry dailyEntryInfo = dailyEntryService.createDailyEntry(dailyEntry, username);
        return new ResponseEntity<>( dailyEntryInfo, HttpStatus.OK);
    }

}
