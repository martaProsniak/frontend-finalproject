import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UsersService} from '../../services/users.service';
import {ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

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

  goBack(): void {
    this.location.back();
  }

}
