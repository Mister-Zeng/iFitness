package com.example.ifitness.service;

import org.springframework.security.core.Authentication;

public interface TokenService {

    String generateToken(Authentication authentication);
}
