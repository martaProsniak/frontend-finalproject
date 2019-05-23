import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Product} from '../../models/product';
import {UsersService} from '../../_services/users.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ProductsService} from '../../_services/products.service';
import {AuthenticationService} from '../../_services/authentication.service';

@Component({
  selector: 'app-users-products',
  templateUrl: './users-products.component.html',
  styleUrls: ['./users-products.component.css']
})
export class UsersProductsComponent implements OnInit {

  user: User = new User();
  goods: Product[];
  currentUser: User;

  constructor(private usersService: UsersService,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(currentUser =>
    this.currentUser = currentUser);
    const id = this.currentUser.id;
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
