package com.bezkoder.spring.datajpa.repository;

import com.bezkoder.spring.datajpa.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TripRepository extends JpaRepository<Trip, Long> {
}