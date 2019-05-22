import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../_services/users.service';
import {User} from '../../models/user';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  error: string;

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
          this.router.navigate(['/products']);
        },
        error => {
          this.error = error;
          // error page to be prepared
          this.router.navigate(['']);
        }
      )
    console.log(this.user);
  }

  goBack(): void {
    this.location.back();
  }
}
