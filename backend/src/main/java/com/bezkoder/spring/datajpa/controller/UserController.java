package com.bezkoder.spring.datajpa.controller;

import com.bezkoder.spring.datajpa.model.User;
import com.bezkoder.spring.datajpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/users/sign_up")
    public ResponseEntity<User> signUp(@RequestBody User user) {
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
        if (foundUser!=null && foundUser.getPassword().equals(password)) {
            foundUser.setIs_loggedin(true);
            System.out.println("Login Successful");
            userRepository.save(foundUser);
            return true;
        } else {
            System.out.println("Login Failed");
            return false;
        }
    }

//    @PutMapping("/User/update/{id}")
//    public ResponseEntity<User> updateUser(@PathVariable("id") long id, @RequestBody User user) {
//        Optional<User> userData = userRepository.findById(id);
//
//        if (userData.isPresent()) {
//            User _user = userData.get();
//            _user.setUsername(user.getUsername);
//            _user.setPassword(user.getPassword);
//            _user.setIs_Admin(getIs_Admin);
//            _user.setIs_loggedin(getIs_loggedin);
//            return new ResponseEntity<>(userRepository.save(_user), HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

    @DeleteMapping("/user/delete/{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable("id") long id) {
        try {
            userRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

//    @GetMapping("/user/get/{id}")
//    public ResponseEntity<User> getUSerById(@PathVariable("id") long id) {
//        Optional<User> userData = userRepository.findById(id);
//
//        if (userData.isPresent()) {
//            return new ResponseEntity<>(userData.get(), HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

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

}
