import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UsersService} from '../../_services/users.service';
import {ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';
import {Product} from '../../models/product';
import {AuthenticationService} from '../../_services/authentication.service';

/**
 * @author Marta Prosniak
 * get user details from API and display it
 */

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User();
  goods: Product[];
  currentUser: User;

  constructor(private usersService: UsersService,
              private route: ActivatedRoute,
              private location: Location,
              private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usersService
      .getUserDetails(id)
      .subscribe(result => {
        this.user = result;
        this.goods = this.user.products;
        console.log(this.goods);
      });
  }

  goBack(): void {
    this.location.back();
  }

}
