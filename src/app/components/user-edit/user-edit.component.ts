import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService
      .getUserDetails(id)
      .subscribe(result => {
        this.user = result;
      });

  }

  saveUserChanges() {
    this.usersService.updateUser(this.user)
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
