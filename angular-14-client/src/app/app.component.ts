import { Component } from '@angular/core';
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TSS';
  adminLoggedIn = false;
  constructor() {}

  update(toUodate: boolean){
    this.adminLoggedIn=toUodate;
    console.log("updating index page");
    console.log(this.adminLoggedIn);
  }


}
