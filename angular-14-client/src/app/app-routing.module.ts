import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { RegisterComponent } from "./views/auth/register/register.component";
import { ConfirmComponent } from "./views/auth/confirmation/confirm.component";
import { AddTripComponent } from "./components/trip/add-trip/add-trip.component";
import { TripListComponent } from "./components/trip/trip-list/trip-list.component";
import { TripDetailsComponent } from "./components/trip/trip-details/trip-details.component";
import { AddStationComponent } from './components/station/add-station/add-station.component';
import { StationListComponent } from './components/station/station-list/station-list.component';
import { StationDetailsComponent } from './components/station/station-details/station-details.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  
  { path: 'register', component: RegisterComponent},
  { path: 'success', component: ConfirmComponent},
  { path: 'stations', component: StationListComponent },
  { path: 'trips', component: TripListComponent },
  { path: 'stations/get/:id', component: StationDetailsComponent },
  { path: 'trips/get/:id', component: TripDetailsComponent },
  { path: 'add/trip', component: AddTripComponent },
  { path: 'add/station', component: AddStationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
