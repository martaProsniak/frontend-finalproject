import { Component, OnInit } from '@angular/core';
import {Order} from '../../models/order';
import {User} from '../../models/user';
import {OrderService} from '../../_services/order.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {isObject} from 'rxjs/internal-compatibility';
import {HttpErrorResponse} from '@angular/common/http';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[];
  currentUser: User;
  loggedIn = false;

  constructor(private orderService: OrderService,
              private authService: AuthenticationService,
              private location: Location) {

    this.authService.currentUser.subscribe(currentUser =>
      this.currentUser = currentUser);
  }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    // check if user is logged in
    if (isObject(this.currentUser)) {
      this.loggedIn = true;
    }
    // gets orders from API
    this.orderService
      .getOrdersTable(this.currentUser.id)
      .subscribe(ordersList => {
        this.orders = ordersList;
      },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        });
  }

  goBack(): void {
    this.location.back();
  }

}
