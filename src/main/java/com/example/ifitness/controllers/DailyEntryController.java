package com.example.ifitness.controllers;

import com.example.ifitness.models.DailyEntry;
import com.example.ifitness.repositories.ExerciseRepository;
import com.example.ifitness.services.DailyEntryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.Date;

@RestController
@RequestMapping(path = "/api/v1/")
@RequiredArgsConstructor
@Slf4j
public class DailyEntryController {

    @Autowired
    DailyEntryService dailyEntryService;
    @GetMapping("/getDailyEntry")
    public ResponseEntity<DailyEntry> getDailyEntry(@RequestParam("userId")  Long userId, @RequestParam("date") String date) throws ResponseStatusException {
        DailyEntry dailyEntry = dailyEntryService.getDailyEntry(userId, date);
//        Jwt jwt = (Jwt) SecurityContextHolder.getContext().getAuthentication()
//                .getPrincipal();
//        String asd = jwt.getExpiresAt().toString();
//        log.info(asd);
        return new ResponseEntity<>(dailyEntry, HttpStatus.OK);
    }
    @PostMapping("/createDailyEntry/user/{userId}")
    public ResponseEntity<DailyEntry> createDailyEntry(@RequestBody DailyEntry dailyEntry, @PathVariable("userId") Long userId) throws ResponseStatusException {
        DailyEntry dailyEntryInfo = dailyEntryService.createDailyEntry(dailyEntry, userId);
        return new ResponseEntity<>( dailyEntryInfo, HttpStatus.OK);
    }

    @PutMapping("/updateDailyEntry/{userId}/dailyEntry")
    public ResponseEntity<DailyEntry> updateDailyEntry(@RequestBody DailyEntry dailyEntry, @PathVariable("userId") Long userId) throws ResponseStatusException {
        DailyEntry dailyEntryInfo = dailyEntryService.updateDailyEntry(dailyEntry, userId);
        return new ResponseEntity<>( dailyEntryInfo, HttpStatus.OK);
    }

}
