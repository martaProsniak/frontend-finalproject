import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import { Router} from '@angular/router';
import {User} from '../../models/user';
import { Location} from '@angular/common';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {


  user: User;

  constructor( private location: Location,
               private usersService: UsersService,
               private router: Router) {
    this.user = new User();

  }

  ngOnInit(): void {
  }

  saveNewUser() {
    this.usersService.post(this.user)
      .subscribe(
        user => {
          this.user = user;
        }
      );
  }

  goBack(): void {
    this.location.back();
  }

}
