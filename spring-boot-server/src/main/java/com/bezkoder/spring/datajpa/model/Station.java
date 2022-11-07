package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "Stations")
public class Station {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;

    @Column(name = "name")
    private String name;

    @OneToMany(mappedBy="from_station", fetch=FetchType.EAGER)
    private Set<Trip> fromTrips = new HashSet<>();

    @OneToMany(mappedBy="to_station", fetch=FetchType.EAGER)
    private Set<Trip> toTrips = new HashSet<Trip>();

    public Station() {
        super();
    }

    public  Station(String name)
    {
        this.name=name;
    }

    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFromTrips(Set<Trip> fromTrips) {
        this.fromTrips = fromTrips;
    }
    public void setToTrips(Set<Trip> toTrips) {
        this.toTrips = toTrips;
    }
}
