package com.example.ifitness.services;

import com.example.ifitness.models.EditMacrosGoal;
import com.example.ifitness.models.EditUserInfo;
import com.example.ifitness.models.LoginRequest;
import com.example.ifitness.models.User;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {

    UserDetails loadUserByUsername(String username);
    User login(LoginRequest userLogin);
    User register(User user);
    User editUserInfo(EditUserInfo editUserInfo);
    User editDailyMacrosGoalInfo(EditMacrosGoal editMacrosGoal);
}

