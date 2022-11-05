package com.bezkoder.spring.datajpa.repository;

import com.bezkoder.spring.datajpa.model.Station;
import org.springframework.data.jpa.repository.JpaRepository;



public interface StationRepository extends JpaRepository<Station, Long> {

}

