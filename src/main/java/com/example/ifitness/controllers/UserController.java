package com.example.ifitness.controllers;

import com.example.ifitness.models.*;
import com.example.ifitness.services.TokenService;
import com.example.ifitness.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping(path = "/api/v1/")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final TokenService tokenService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody  User user) throws ResponseStatusException {
        User userInfo = userService.register(user);
        System.out.println(user);
        return new ResponseEntity<>(userInfo, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginRequest userLogin) throws AuthenticationException {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userLogin.username(), userLogin.password()));
        String token = tokenService.generateToken(authentication);
        User user = userService.login(userLogin);
        user.setToken(token);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/isAuthenticated")
    public ResponseEntity<Boolean> isAuthenticated(@Param("userId")Long userId) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return new ResponseEntity<Boolean>(authentication.isAuthenticated(), HttpStatus.OK);
    }

    @PutMapping("/editUserInfo/user/{userId}")
    public ResponseEntity<User> editUserInfo(@RequestBody EditUserInfo editUserInfo, @PathVariable Long userId) throws ResponseStatusException {
        User userInfo = userService.editUserInfo(editUserInfo, userId);
        return new ResponseEntity<>( userInfo, HttpStatus.OK);
    }

    @PutMapping("/editMacrosGoal/user/{userId}")
    public ResponseEntity<MacrosGoal> editMacrosGoal(@RequestBody MacrosGoal macrosGoal, @PathVariable Long userId) throws ResponseStatusException {
        MacrosGoal macroGoalInfo = userService.editMacrosGoal(macrosGoal, userId);
        return new ResponseEntity<>( macroGoalInfo, HttpStatus.OK);
    }
}
