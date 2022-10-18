package com.example.ifitness.controller;

import com.example.ifitness.model.User;
import com.example.ifitness.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/api/v1/")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;


    @GetMapping(path = "/")
    public String welcomePage() {
        return "Success to load welcome page...!";
    }

    @PostMapping(path = "/register")
    public ResponseEntity<Object> register(@RequestBody User user) {
        userService.register(user);
        return new ResponseEntity<>("User is registered successfully", HttpStatus.OK);
    }
//
//    @PostMapping(path = "/login")
//    public ResponseEntity generateToken(@RequestBody User user) throws Exception {
//        userService.login(user);
//        return new ResponseEntity<>("User is logged in successfully", HttpStatus.OK);
//    }
}
