package com.example.ifitness.services;

import com.example.ifitness.models.*;
import com.example.ifitness.repositories.DailyEntryRepository;
import com.example.ifitness.repositories.DailyMacrosRepository;
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

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MacrosGoalRepository macrosGoalRepository;
    @Autowired
    private DailyEntryRepository dailyEntryRepository;
    @Autowired
    private DailyMacrosRepository dailyMacrosRepository;

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

        MacrosGoal macrosGoal = user.getMacrosGoal();
        macrosGoal.setUser(user);
        macrosGoalRepository.save(user.getMacrosGoal());

        return user;
    }

    @Override
    public User editUserInfo(EditUserInfo editUserInfo) {
        Optional<User> userFromDatabase = userRepository.findByUsername(editUserInfo.username());
        User userInfo = userFromDatabase.get();
        userInfo.setEmailAddress(editUserInfo.emailAddress());
        userInfo.setFirstName(editUserInfo.firstName());
        userInfo.setLastName(editUserInfo.lastName());
        userRepository.save(userInfo);
        return userInfo;
    }

    @Override
    public MacrosGoal editMacrosGoal(MacrosGoal macrosGoal) {
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

    @Override
    public DailyEntry addDailyEntry(DailyEntry dailyEntry, String username) {
        // Find user
        Optional<User> userFromDatabase = userRepository.findByUsername(username);
        User user = userFromDatabase.get();
        // Parse date to LocalDate format
        LocalDate date = LocalDate.parse(dailyEntry.getDate().toString());
        // Create new entry and set data
        DailyEntry entry = new DailyEntry();
        entry.setDate(date);
        entry.setWeight(dailyEntry.getWeight());
        entry.setDailyMacros(dailyEntry.getDailyMacros());
        entry.setExercise(dailyEntry.getExercise());
        // Create a DailyEntry list variable that stores the user's previous entries if any
        List<DailyEntry> list = user.getDailyEntry();
        // Add this new entry to the list
        list.add(entry);
        // Add the list that contains previous entries and this new entry to this user
        user.setDailyEntry(list);

        dailyMacrosRepository.save(dailyEntry.getDailyMacros());
        userRepository.save(user);
        dailyEntryRepository.save(entry);
        return dailyEntry;
    }




}
