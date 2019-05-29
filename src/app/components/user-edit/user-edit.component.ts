import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UsersService} from '../../_services/users.service';
import {ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';

/**
 * @author Marta Prosniak
 * allow user editing
 */

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

  // get user details
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('orderid'));
    this.usersService
      .getUserDetails(id)
      .subscribe(result => {
        this.user = result;
      });

  }
  // save user changes in database
  saveUserChanges() {
    this.usersService.updateUser(this.user)
      .subscribe(
        user => {
          this.user = user;
        }
      );
    alert('Changes saved!');
  }

  goBack(): void {
    this.location.back();
  }

}
