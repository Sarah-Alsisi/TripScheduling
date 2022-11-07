import { Component } from '@angular/core';
import {Trip} from "../../../models/trip.model";
import {TripService} from "../../../services/trip.service";
import {FormControl, Validators} from "@angular/forms";
import {Station} from "../../../models/station.model";
import {StationService} from "../../../services/station.service";

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent {

  station: Station = {
    name: ''
  };
  submitted = false;

  constructor(private stationService: StationService) { }

  saveStation(): void {
    const data = {
      name: this.station.name
    };

    this.stationService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newStation(): void {
    this.submitted = false;
    this.station = {
      name: ''
    };
  }

}
