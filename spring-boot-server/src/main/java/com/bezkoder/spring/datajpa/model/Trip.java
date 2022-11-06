package com.bezkoder.spring.datajpa.model;


import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Trips")
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long id;

    @Column(name = "start_time")
    private Date start_time;

    @Column(name = "end_time")
    private Date end_time;

    @Column(name = "from_station")
    private String from_station;

    @Column(name = "to_station")
    private String to_station;

    public Trip() {
        super();
    }

    public Trip(Date start_time, Date end_time, String from_station, String to_station) {
        this.start_time=start_time;
        this.end_time=end_time;
        this.from_station=from_station;
        this.to_station=to_station;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getStart_time() {
        return start_time;
    }

    public void setStart_time(Date start_time) {
        this.start_time = start_time;
    }

    public Date getEnd_time() {
        return end_time;
    }

    public void setEnd_time(Date end_time) {
        this.end_time = end_time;
    }

    public String getFrom_station() {
        return from_station;
    }

    public void setFrom_station(String from_station) {
        this.from_station = from_station;
    }

    public String getTo_station() {
        return to_station;
    }

    public void setTo_station(String to_station) {
        this.to_station = to_station;
    }
}