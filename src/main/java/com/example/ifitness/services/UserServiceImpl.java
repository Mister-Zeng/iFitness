package com.example.ifitness.services;

import com.example.ifitness.models.*;
import com.example.ifitness.repositories.MacrosGoalRepository;
import com.example.ifitness.repositories.UserRepository;
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
        User userInfo = (userFromDatabase.get());
        return userInfo;
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

        MacrosGoal macrosGoal = user.getMacros_goal();
        macrosGoal.setUser(user);
        macrosGoalRepository.save(user.getMacros_goal());

        return user;
    }

    @Override
    public User editUserInfo(EditUserInfo editUserInfo) {
        Optional<User> userFromDatabase = userRepository.findByUsername(editUserInfo.username());
        User userInfo = (userFromDatabase.get());
        userInfo.setEmail_address(editUserInfo.email_address());
        userInfo.setFirst_name(editUserInfo.first_name());
        userInfo.setLast_name(editUserInfo.last_name());
        userRepository.save(userInfo);
        return userInfo;
    }

    @Override
    public MacrosGoal editDailyMacrosGoalInfo(MacrosGoal macrosGoal) {
//        Optional<User> userFromDatabase = userRepository.findByUsername(editMacrosGoal.username());
//        User userInfo = (userFromDatabase.get());
//        MacrosGoal mg = new MacrosGoal();
//        mg.setFat(editMacrosGoal.fat());
//        mg.setProtein(editMacrosGoal.protein());
//        mg.setCarbs(editMacrosGoal.carbs());
//        mg.setCalories(editMacrosGoal.calories());
//        mg.setUser(userInfo);
        macrosGoalRepository.save(macrosGoal);
      return macrosGoal;
    }


}
