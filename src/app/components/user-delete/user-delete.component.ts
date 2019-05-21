import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../_services/users.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../../models/user';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  user: User = new User();
  deleted = false;

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

  goBack(): void {
    this.location.back();
  }

  deleteUser(): void {
    this.usersService.delete(this.user).subscribe(result => this.deleted = true);
  }





}
