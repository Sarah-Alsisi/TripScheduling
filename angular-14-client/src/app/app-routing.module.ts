import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorial/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial/tutorial-details/tutorial-details.component';
import { IndexComponent } from './views/index/index.component';
import { RegisterComponent } from "./views/auth/register/register.component";
import {ConfirmComponent} from "./views/auth/confirmation/confirm.component";
import {StationListComponent} from "./components/station/station-list/station-list.component";
import {StationDetailsComponent} from "./components/station/station-details/station-details.component";
import {AddTripComponent} from "./components/trip/add-trip/add-trip.component";
import {AddStationComponent} from "./components/station/add-station/add-station.component";
import {AddTutorialComponent} from "./components/tutorial/add-tutorial/add-tutorial.component";

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'success', component: ConfirmComponent},
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'stations', component: StationListComponent },
  //{ path: 'trips', component: TripComponent },
  { path: 'stations/get/:id', component: StationDetailsComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
  { path: 'add/trip', component: AddTripComponent },
  { path: 'add/station', component: AddStationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
