import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/models/station.model';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationComponent implements OnInit {

  stations?: Station[];
  currentStation={};
  currentIndex = -1;
  id = '';

  constructor(private stationService: StationService) { }

  ngOnInit(): void {
    this.retrieveStations();
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

  refreshList(): void {
    this.retrieveStations();
    this.currentStation = {};
    this.currentIndex = -1;
  }

  setActiveStation(station: Station, index: number): void {
    this.currentStation = station;
    this.currentIndex = index;
  }

  removeAllStations(): void {
    this.stationService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchId(): void {
    this.currentStation = {};
    this.currentIndex = -1;

    this.stationService.findById(this.id)
      .subscribe({
        next: (data) => {
          this.stations = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}
