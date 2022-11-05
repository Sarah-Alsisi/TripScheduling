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
import { StationComponent } from './components/station/station-list/station-list.component';
import {StationDetailsComponent} from "./components/station/station-details/station-details.component";


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent,
    IndexComponent,
    RegisterComponent,
    ConfirmComponent,
    StationComponent,
    StationDetailsComponent
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
