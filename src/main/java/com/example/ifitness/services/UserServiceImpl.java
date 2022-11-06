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
        Optional<User> userFromDB = userRepository.findByUsername(userLogin.username());

        if(userFromDB.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User does not exists!");
        }

        return (userFromDB.get());
    }

    @Override
    public User register(User user) {
        Optional<User> userFromDB = userRepository.findByUsername(user.getUsername());
        if(userFromDB.isPresent()){
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
        Optional<User> userFromDB = userRepository.findById(userId);

        if(userFromDB.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can't find user with id " + userId);
        }

        User user = userFromDB.get();
        user.setEmailAddress(editUserInfo.emailAddress());
        user.setFirstName(editUserInfo.firstName());
        user.setLastName(editUserInfo.lastName());
        userRepository.save(user);
        return user;
    }

    @Override
    public MacrosGoal editMacrosGoal(MacrosGoal macrosGoal, Long userId) {
        Optional<User> userFromDatabase = userRepository.findById(userId);

        if(userFromDatabase.isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can't find user with id " + userId);
        }

        User user = userFromDatabase.get();
        user.setMacrosGoal(macrosGoal);
        userRepository.save(user);

        Optional<MacrosGoal> macrosGoalFromDB = macrosGoalRepository.findById(macrosGoal.getId());

        if(macrosGoalFromDB.isEmpty()){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Can't find Macros Goal with id " + macrosGoal.getId());
        }

        MacrosGoal thisMacrosGoal = macrosGoalFromDB.get();

        thisMacrosGoal.setUser(user);
        macrosGoalRepository.save(macrosGoal);
        return thisMacrosGoal;
    }



}
