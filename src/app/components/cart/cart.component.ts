import { Component, OnInit } from '@angular/core';
import {Cart} from '../../models/cart';
import {CartService} from '../../_services/cart.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {Product} from '../../models/product';
import {User} from '../../models/user';
import {UsersService} from '../../_services/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart;
  purchases: Product[];
  currentUser: User;
  product: Product;

  constructor(private cartService: CartService,
              private usersService: UsersService,
              private authService: AuthenticationService) {
    this.authService.currentUser.subscribe(currentUser =>
      this.currentUser = currentUser);
  }

  ngOnInit() {
    const userId = this.currentUser.id;
    this.usersService.getUserDetails(userId).
    subscribe(result => {
      this.cart = result.cart;
      this.purchases = this.cart.products;
    });
  }

  addToCart(productId: number) {
    const userId = this.currentUser.id;
    let cart: Cart;
    if (this.currentUser.cart == null) {
      cart = new Cart();
    } else {
      cart = this.currentUser.cart;
    }
    console.log(productId);
    this.cartService.addToCart(userId, productId, cart)
      .subscribe(result => this.cart = result);
    console.log('success');
  }

}
