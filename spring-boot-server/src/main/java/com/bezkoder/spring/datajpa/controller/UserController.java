package com.bezkoder.spring.datajpa.controller;

import com.bezkoder.spring.datajpa.model.User;
import com.bezkoder.spring.datajpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        try {
            List<User> users = new ArrayList<>();
            userRepository.findAll().forEach(users::add);
            if (users.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(users, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping("/users/sign_up")
    public ResponseEntity<User> sign_up(@RequestBody User user) {
        try {
            User _user = userRepository.save(new User(user.getUsername(), user.getPassword(), user.getIs_Admin(), false));
            return new ResponseEntity<>(_user, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/users/login")
    public boolean login(@RequestBody User user) {
        String password = user.getPassword();
        String username = user.getUsername();
        User foundUser = userRepository.findByName(username);
        if (foundUser.getPassword().equals(password)) {
            foundUser.setIs_loggedin(true);
            System.out.println("Login Successful");
            userRepository.save(foundUser);
            return true;
        } else {
            System.out.println("Login Failed");
            return false;
        }
    }

}
