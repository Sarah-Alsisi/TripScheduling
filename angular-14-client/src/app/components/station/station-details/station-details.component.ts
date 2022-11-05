import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Station } from 'src/app/models/station.model';
import {StationService} from "../../../services/station.service";

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {

  @Input() viewMode = false;

  @Input() currentStation: Station = {
    name: ''
  };

  message = '';

  constructor(
    private stationService: StationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getStation(this.route.snapshot.params["id"]);
    }
  }

  getStation(id: any): void {
    this.stationService.get(id)
      .subscribe({
        next: (data) => {
          this.currentStation = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }


  updateStation(): void {
    this.message = '';

    this.stationService.update(this.currentStation.id, this.currentStation)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This station was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteStation(): void {
    this.stationService.delete(this.currentStation.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/stations']);
        },
        error: (e) => console.error(e)
      });
  }

}
