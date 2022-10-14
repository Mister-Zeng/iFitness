package com.example.ifitness.service;

import com.example.ifitness.model.AuthUser;
import com.example.ifitness.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByEmail(username)
                .map(AuthUser::new)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + username));
    }

//    @Override
//    public void register(User user) {
//
//        User userFromDatabase = userRepository.findByEmail(user.getEmail());
//        if(userFromDatabase != null){
//            log.error("User has been already registered!");
//            throw new Error("User has been already registered!");
//        }
//
//        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//        String encodedPassword = passwordEncoder.encode(user.getPassword());
//        user.setPassword(encodedPassword);
//        log.info("User {} is registered successfully!", user);
//        userRepository.save(user);
//    }

//    @Override
//    public String login(User user) throws Exception {
//
//        try {
//            System.out.println("Action in controller authenticated....");
//            authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
//        } catch (Exception e) {
//            e.printStackTrace();
//            throw new Exception("Invalid username/password");
//        }
//
//        return jwtUtilService.generateToken(user.getEmail());
//    }
}
