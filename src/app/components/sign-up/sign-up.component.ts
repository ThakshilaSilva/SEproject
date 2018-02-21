import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceService} from "../../services/user-service.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userService: UserServiceService;
  constructor(private router: Router, private user: UserServiceService) {
    this.userService = user;
  }

  ngOnInit() {
  }
  addNewUser() {
    const first_name = document.forms['userForm']['first_name'].value;
    const last_name = document.forms['userForm']['last_name'].value;
    const id = document.forms['userForm']['student_id'].value;
    const email = document.forms['userForm']['email'].value;
    const pass = document.forms['userForm']['password'].value;
    const conf_pass = document.forms['userForm']['password_confirmation'].value;
    this.user.addUser({
      name: first_name,
      username: last_name,
      id: id,
      email: email,
      pass: pass,
      conf_pass: conf_pass
    }).subscribe(
      result => {
        console.log(result);
        this.router.navigate(['slider']);
      }, error => {
        console.log(error);
      }
    );
  }
}
