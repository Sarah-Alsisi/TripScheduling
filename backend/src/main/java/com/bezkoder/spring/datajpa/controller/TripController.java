package com.bezkoder.spring.datajpa.controller;
import com.bezkoder.spring.datajpa.model.Trip;
import com.bezkoder.spring.datajpa.repository.TripRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api")
public class TripController {

    @Autowired
    TripRepository tripRepository;

    @PostMapping("/trip/create")
    public ResponseEntity<Trip> createTrip(@RequestBody Trip trip) {
        try{
            Trip _trip = tripRepository
                    .save(new Trip(trip.getStart_time(),trip.getEnd_time(),trip.getFrom_station(),trip.getTo_station()));
            return new ResponseEntity<>(_trip, HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/trip/update/{id}")
    public ResponseEntity<Trip> updateTrip(@PathVariable("id") long id, @RequestBody Trip trip) {
        Optional<Trip> tripData = tripRepository.findById(id);

        if (tripData.isPresent()) {
            Trip _trip = tripData.get();
            _trip.setStart_time(trip.getStart_time());
            _trip.setEnd_time(trip.getEnd_time());
            _trip.setFrom_station(trip.getFrom_station());
            _trip.setTo_station(trip.getTo_station());
            return new ResponseEntity<>(tripRepository.save(_trip), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/trip/delete/{id}")
    public ResponseEntity<HttpStatus> deleteTrip(@PathVariable("id") long id) {
        try {
            tripRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/trip/delete")
    public ResponseEntity<HttpStatus> deleteAllTrips() {
        try {
            tripRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("/trip/get/{id}")
    public ResponseEntity<Trip> getTripById(@PathVariable("id") long id) {
        Optional<Trip> tripData = tripRepository.findById(id);

        if (tripData.isPresent()) {
            return new ResponseEntity<>(tripData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/trip/get")
    public ResponseEntity<List<Trip>> getAllTrips() {
        try {
            List<Trip> trips = new ArrayList<>();
            tripRepository.findAll().forEach(trips::add);
            if (trips.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(trips, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}