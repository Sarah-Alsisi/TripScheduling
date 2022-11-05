package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;
@Entity
@Table(name = "Stations")
public class Station {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long id;

    @Column(name = "name")
    private String name;


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
}
