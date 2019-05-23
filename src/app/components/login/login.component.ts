import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service';
import {User} from '../../models/user';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  message: string;

  constructor(private location: Location,
              private usersService: UsersService,
              private router: Router) {
    this.user = new User();

  }

  ngOnInit(): void {
  }

  login() {
    this.usersService.login(this.user)
      .subscribe(
        user => {
          this.user = user;
          this.message = 'Hello ' + this.user.name + ' !';
          this.router.navigate(['/products']);
        }
      );
  }

  goBack(): void {
    this.location.back();
  }
}
