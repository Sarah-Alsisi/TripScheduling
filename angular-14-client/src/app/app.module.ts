import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/tutorial/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorial/tutorials-list/tutorials-list.component';
import { IndexComponent } from './views/index/index.component';
import {RegisterComponent} from "./views/auth/register/register.component";
import {ConfirmComponent} from "./views/auth/confirmation/confirm.component";
import {StationListComponent} from './components/station/station-list/station-list.component';
import {StationDetailsComponent} from "./components/station/station-details/station-details.component";
import {AddTripComponent} from "./components/trip/add-trip/add-trip.component";
import {AddStationComponent} from "./components/station/add-station/add-station.component";
import {TripDetailsComponent} from "./components/trip/trip-details/trip-details.component";
import {TripListComponent} from "./components/trip/trip-list/trip-list.component";


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    IndexComponent,
    RegisterComponent,
    ConfirmComponent,
    StationListComponent,
    StationDetailsComponent,
    AddTripComponent,
    AddStationComponent,
    TripDetailsComponent,
    TripListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
