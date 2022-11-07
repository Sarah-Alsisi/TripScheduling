import { Component } from '@angular/core';
import {Trip} from "../../../models/trip.model";
import {TripService} from "../../../services/trip.service";
import {Station} from "../../../models/station.model";
import {StationService} from "../../../services/station.service";

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent {
  stations: Station[] = [];

  trip: Trip = {
    from_station: {
        id:'',
      },
    to_station: {
        id:'',
      },
    start_time: '',
    end_time: ''
  };
  submitted = false;

  constructor(private tripService: TripService, private stationService: StationService) {
    this.retrieveStations();
    console.log("retrieveStations 1");
  }

  retrieveStations(): void {
    this.stationService.getAll()
      .subscribe({
        next: (data) => {
          this.stations = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  saveTrip(): void {
    const data = {
      from_station:
        {
          id: this.trip.from_station.id,
        },
      to_station:
        {
          id: this.trip.to_station.id,
        },
      start_time: this.trip.start_time,
      end_time: this.trip.end_time
    };

    this.tripService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTrip(): void {
    this.submitted = false;
    this.trip = {
      from_station:
        {
          id:'',
        },
      to_station:
        {
          id:'',
        },
      start_time: '',
      end_time: ''
    };
    this.retrieveStations();
    console.log("retrieveStations 2");
  }

}
