package com.example.ifitness.controllers;

import com.example.ifitness.models.EditUserInfo;
import com.example.ifitness.models.LoginRequest;
import com.example.ifitness.models.User;
import com.example.ifitness.services.TokenService;
import com.example.ifitness.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping(path = "/api/v1/")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    private final TokenService tokenService;

    private final AuthenticationManager authenticationManager;
    @GetMapping(path = "/")
    public String welcomePage() {
        return "Success to load welcome page...!";
    }

    @PostMapping(path = "/register")
    public ResponseEntity<User> register(@RequestBody  User user) throws ResponseStatusException {
        User userInfo = userService.register(user);
        return new ResponseEntity<>( userInfo, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginRequest userLogin) throws AuthenticationException {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLogin.username(), userLogin.password()));
        String token = tokenService.generateToken(authentication);
        User userInfo = userService.login(userLogin);
        userInfo.setToken(token);
        return new ResponseEntity<>( userInfo, HttpStatus.OK);
    }

    @PutMapping("/editUserInfo")
    public ResponseEntity<User> editUserInfo(@RequestBody EditUserInfo editUserInfo) throws ResponseStatusException {
        User userInfo = userService.editUserInfo(editUserInfo);
        return new ResponseEntity<>( userInfo, HttpStatus.OK);
    }
}
