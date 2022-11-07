import { Component } from '@angular/core';
import {Trip} from "../../../models/trip.model";
import {TripService} from "../../../services/trip.service";

@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent {

  trip: Trip = {
    from_station: '',
    to_station: '',
    start_time: '',
    end_time: ''
  };
  submitted = false;

  constructor(private tripService: TripService) { }

  saveTrip(): void {
    const data = {
      from_station: this.trip.from_station,
      to_station: this.trip.to_station,
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
      from_station: '',
      to_station: '',
      start_time: '',
      end_time: ''
    };
  }

}
