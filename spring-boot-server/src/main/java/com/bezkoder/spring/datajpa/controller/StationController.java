package com.bezkoder.spring.datajpa.controller;

import com.bezkoder.spring.datajpa.model.Station;
import com.bezkoder.spring.datajpa.model.User;
import com.bezkoder.spring.datajpa.repository.StationRepository;
import com.bezkoder.spring.datajpa.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class StationController {

    @Autowired
    StationRepository stationRepository;

    @PostMapping("/station/create")
    public ResponseEntity<Station> create_station(@RequestBody Station station) {
        try{
            Station _station = stationRepository
                    .save(new Station(station.getName()));
            return new ResponseEntity<>(_station, HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/station/update/{id}")
    public ResponseEntity<Station> updateStation(@PathVariable("id") long id, @RequestBody Station station) {
        Optional<Station> stationData = stationRepository.findById(id);

        if (stationData.isPresent()) {
            Station _station = stationData.get();
            _station.setName(station.getName());
            return new ResponseEntity<>(stationRepository.save(_station), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/station/delete/{id}")
    public ResponseEntity<HttpStatus> deleteStation(@PathVariable("id") long id) {
        try {
            stationRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/station/delete")
    public ResponseEntity<HttpStatus> deleteAllStations() {
        try {
            stationRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/station/get/{id}")
    public ResponseEntity<Station> getStationById(@PathVariable("id") long id) {
        Optional<Station> stationData = stationRepository.findById(id);

        if (stationData.isPresent()) {
            return new ResponseEntity<>(stationData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/station/get")
    public ResponseEntity<List<Station>> getAllStations() {
        try {
            List<Station> stations = new ArrayList<>();
            stationRepository.findAll().forEach(stations::add);
            if (stations.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(stations, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

