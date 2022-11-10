import { Component, Input, OnInit } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip } from 'src/app/models/trip.model';
import {Station} from "../../../models/station.model";
import {StationService} from "../../../services/station.service";

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  stations: Station[] = [];
  @Input() viewMode = false;

  @Input() currentTrip: Trip= {
    start_time: '',
    end_time: '',
    from_station:
      {
        id:'',
      },
    to_station:
      {
        id:'',
      }
  };

  message = '';

  constructor(
    private tripService: TripService,
    private route: ActivatedRoute,
    private router: Router,
    private stationService: StationService) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTrip(this.route.snapshot.params["id"]);
      this.retrieveStations();
    }
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

  getTrip(id: any): void {
    this.tripService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTrip = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateTrip(): void {
    this.message = '';

    this.tripService.update(this.currentTrip.id, this.currentTrip)
      .subscribe({
        next: (res) => {
          console.log(res);
          console.log("from: ",this.currentTrip.from_station.name);
          console.log("to: ",this.currentTrip.to_station.name);
          this.message = res.message ? res.message : 'This trip was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteTrip(): void {
    this.tripService.delete(this.currentTrip.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/trips']);
        },
        error: (e) => console.error(e)
      });
  }

}
