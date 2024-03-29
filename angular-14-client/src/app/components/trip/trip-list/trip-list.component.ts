import { Component, OnInit } from '@angular/core';
import {Trip} from "../../../models/trip.model";
import {TripService} from "../../../services/trip.service";


@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips?: Trip[];
  currentTrip: Trip = {};
  currentIndex = -1;
  id = '';

  search=false;
  searchResult: any;

  constructor(private tripService: TripService) { }

  ngOnInit(): void {
    this.retrieveTrips();
  }

  retrieveTrips(): void {
    this.tripService.getAll()
      .subscribe({
        next: (data) => {
          this.trips = data;
          console.log(data);
          this.search=false;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTrips();
    this.search=false;
    this.currentTrip = {};
    this.currentIndex = -1;
  }

  setActiveStation(station: Trip, index: number): void {
    this.currentTrip = station;
    this.currentIndex = index;
  }

  removeAllTrips(): void {
    this.tripService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchID(): void {
    this.currentTrip = {};
    this.currentIndex = -1;

    this.tripService.findById(this.id)
      .subscribe({
        next: (data) => {
          this.trips = data;
          this.search=true;
          this.searchResult = data;
          console.log(data);
        },
        error: (e) => {
          this.searchResult='-1';
          this.search=false;
          console.error(e)
        }
      });
  }

}
