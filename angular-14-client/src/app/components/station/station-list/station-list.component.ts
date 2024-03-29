import { Component, OnInit } from '@angular/core';
import {Station} from "../../../models/station.model";
import {StationService} from "../../../services/station.service";


@Component({
  selector: 'app-stations-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit {
  stations?: Station[];
  currentStation: Station = {};
  currentIndex = -1;
  id = '';

  search=false;
  searchResult: any;

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
          this.search=false;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveStations();
    this.search=false;
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

  searchID(): void {
    this.currentStation = {};
    this.currentIndex = -1;

    this.stationService.findById(this.id)
      .subscribe({
        next: (data) => {
          this.stations = data;
          this.search=true;
          this.searchResult = data;
          console.log(data);
        },
        error: (e) => {
          this.searchResult='-1';
          this.search=false;
          console.log(this.searchResult);
          console.error(e)
        }
      });

  }

}
