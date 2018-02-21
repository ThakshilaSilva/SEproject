import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(protected loginservice: LoginService, private router: Router) {
  }

  ngOnInit() {
  }
  addUser() {
    this.router.navigate(['signup']);
  }
}
