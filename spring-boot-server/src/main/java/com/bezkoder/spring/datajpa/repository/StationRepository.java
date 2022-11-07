package com.bezkoder.spring.datajpa.repository;

import com.bezkoder.spring.datajpa.model.Station;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface StationRepository extends JpaRepository<Station, Long> {

}

