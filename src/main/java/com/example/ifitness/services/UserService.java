package com.example.ifitness.services;

import com.example.ifitness.models.*;
import org.springframework.security.core.userdetails.UserDetails;


public interface UserService {

    UserDetails loadUserByUsername(String username);
    User login(LoginRequest userLogin);
    User register(User user);
    User editUserInfo(EditUserInfo editUserInfo, Long userId);
    MacrosGoal editMacrosGoal(MacrosGoal macrosGoal, Long userId);
}

