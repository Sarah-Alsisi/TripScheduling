import { Component, OnInit } from "@angular/core";
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service'
import {AppComponent} from "../../app.component";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
})
export class IndexComponent  {
  user: User = {
    username: '',
    password: ''

  };
  loggedIn = false;

  constructor(private  userService: UserService, private appComponent: AppComponent) {}

  loginUser(): void {
    const data = {
      username: this.user.username,
      password: this.user.password
    };

    this.userService.update(data)
      .subscribe({
        next: (res) => {
          console.log(res)
          console.log(data);
          if(res){
            this.loggedIn = true;
            this.appComponent.update(this.loggedIn);
            console.log("logged in: true");
          }
        },
        error: (e) => console.error(e)
      });
  }

}
