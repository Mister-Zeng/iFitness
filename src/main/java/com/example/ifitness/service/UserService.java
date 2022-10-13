package com.example.ifitness.service;

import com.example.ifitness.model.User;

public interface UserService {

    void register(User user);

    User getUser(String email);

}

