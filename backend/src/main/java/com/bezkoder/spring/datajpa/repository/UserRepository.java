package com.bezkoder.spring.datajpa.repository;

import com.bezkoder.spring.datajpa.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findById(long id);
    @Query("SELECT u FROM User u WHERE u.username = ?1")
    public User findByName(String username);
}
