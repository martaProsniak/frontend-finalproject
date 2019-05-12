import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UsersService} from '../../services/users.service';
import {UserList} from '../../models/user-list';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: UserList;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService
      .getUserList()
      .subscribe(userList => {
          this.users = userList;
        }
      );
  }

}
