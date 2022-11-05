import { Component, OnInit } from "@angular/core";
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: "app-index",
  templateUrl: "./register.component.html",
})
export class RegisterComponent {
  user: User = {
    username: '',
    password: '',
    is_admin: true,
    is_loggedin: false
  };
  submitted = false;

  constructor(private  userService: UserService) {}

  saveUsers(): void {
    const data = {
      username: this.user.username,
      password: this.user.password,
      is_Admin: this.user.is_admin
    };
    this.userService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUser(): void {
    this.submitted = false;
    this.user = {
      username: '',
      password: '',
      is_admin:false,
      is_loggedin: false
    };
  }
}
