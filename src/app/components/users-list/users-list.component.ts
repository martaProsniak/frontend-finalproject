import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UsersService} from '../../_services/users.service';
import {HttpErrorResponse} from '@angular/common/http';

/**
 * @author Marta Prosniak
 * get all users from database
 * restricted - route only for admins
 */

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }
  // get users from database
  getUsers(): void {
    this.usersService
      .getUsersTable()
      .subscribe(userList => {
          this.users = userList;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        });
  }
}
