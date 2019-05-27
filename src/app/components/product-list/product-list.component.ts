import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {Product} from '../../models/product';
import {ProductsService} from '../../_services/products.service';
import {AuthenticationService} from '../../_services/authentication.service';
import {User} from '../../models/user';
import {CartService} from '../../_services/cart.service';
import {Cart} from '../../models/cart';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentUser: User;

  constructor(private productService: ProductsService,
              private authService: AuthenticationService,
              private cartService: CartService) {
    this.authService.currentUser.subscribe(currentUser =>
      this.currentUser = currentUser);
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProductsTable()
      .subscribe(productList => {
          this.products = productList;
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        });
  }

  addToCart(productId: number) {
    const userId = this.currentUser.id;
    let cart: Cart;
    if (this.currentUser.cart === null) {
      cart = new Cart();
    } else {
      cart = this.currentUser.cart;
    }
    console.log(productId);
    this.cartService.addToCart(userId, productId, cart)
      .subscribe(result =>
        this.currentUser.cart = result);
    console.log('success');
    this.ngOnInit();
  }

}
