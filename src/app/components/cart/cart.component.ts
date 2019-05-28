import {Component, OnInit} from '@angular/core';
import {Cart} from '../../models/cart';
import {CartService} from '../../_services/cart.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {Product} from '../../models/product';
import {User} from '../../models/user';
import {UsersService} from '../../_services/users.service';
import {Router} from '@angular/router';
import {isObject} from 'rxjs/internal-compatibility';
import {Location} from '@angular/common';

/**
 * @author Marta Prosniak
 * User cart frontend representation
 */

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
  loggedIn: boolean;

  constructor(private cartService: CartService,
              private usersService: UsersService,
              private authService: AuthenticationService,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    if (!isObject(this.authService.currentUser)) {
      this.loggedIn = false;
      this.router.navigate(['/login']);
    } else {
      this.authService.currentUser.subscribe(currentUser =>
        this.currentUser = currentUser);
      const userId = this.currentUser.id;
      this.loggedIn = true;
      this.usersService.getUserDetails(userId).subscribe(result => {
        this.cart = result.cart;
        this.purchases = this.cart.products;
      });
    }
  }

  removeFromCart(productId: number) {
    this.cartService.remove(this.cart.id, productId, this.cart)
      .subscribe(cart => this.cart = cart);
    alert('Removed from cart!');
    this.ngOnInit();
  }

  goBack(): void {
    this.location.back();
  }
}
