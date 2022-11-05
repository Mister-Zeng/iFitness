package com.example.ifitness.services;

import com.example.ifitness.models.*;
import com.example.ifitness.repositories.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MacrosGoalRepository macrosGoalRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .map(AuthUser::new)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }


    @Override
    public User login(LoginRequest userLogin) {
        Optional<User> userFromDatabase = userRepository.findByUsername(userLogin.username());
        return (userFromDatabase.get());
    }

    @Override
    public User register(User user) {
        Optional<User> userFromDatabase = userRepository.findByUsername(user.getUsername());
        if(userFromDatabase.isPresent()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Username already exists!");
        }

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        log.info("User {} is registered successfully!", user);
        userRepository.save(user);

        MacrosGoal macrosGoal = user.getMacrosGoal();
        macrosGoal.setUser(user);
        macrosGoalRepository.save(macrosGoal);

        return user;
    }

    @Override
    public User editUserInfo(EditUserInfo editUserInfo,Long userId) {
        User user = userRepository.findById(userId).get();
        user.setEmailAddress(editUserInfo.emailAddress());
        user.setFirstName(editUserInfo.firstName());
        user.setLastName(editUserInfo.lastName());
        userRepository.save(user);
        return user;
    }

    @Override
    public MacrosGoal editMacrosGoal(MacrosGoal macrosGoal, Long userId) {
        User user = userRepository.findById(userId).get();
        user.setMacrosGoal(macrosGoal);
        userRepository.save(user);

        MacrosGoal thisMacrosGoal = macrosGoalRepository.findById(macrosGoal.getId()).get();
        thisMacrosGoal.setUser(user);
        macrosGoalRepository.save(macrosGoal);
        return thisMacrosGoal;
    }


}
