import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private location: Location,
              private usersService: UsersService,
              private authService: AuthenticationService,
              private router: Router) {
    this.user = new User();

  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.user)
      .subscribe(
        user => {
          this.user = user;
          this.router.navigate(['']);
        }
      );
  }

  goBack(): void {
    this.location.back();
  }
}
