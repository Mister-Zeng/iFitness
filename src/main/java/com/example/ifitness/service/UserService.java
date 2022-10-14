package com.example.ifitness.service;

import com.example.ifitness.model.User;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserService {

    UserDetails loadUserByUsername(String username);

//    void register(User user);

//    String login(User user) throws Exception;
}

