import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ProductsService} from '../../_services/products.service';
import {Product} from '../../models/product';
import {AuthenticationService} from '../../_services/authentication.service';
import {User} from '../../models/user';

/**
 * @author Marta Prosniak
 * creates new products and sends it to API
 */

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product;
  currentUser: User;


  constructor( private location: Location,
               private productsService: ProductsService,
               private authService: AuthenticationService) {
    this.product = new Product();
  }

  ngOnInit(): void {
  }
  // check if user is loggedin and gets current user id
  saveNewProduct() {
    this.authService.currentUser.subscribe(currentUser =>
      this.currentUser = currentUser);
    const userId = this.currentUser.id;
    // post new product to API
    this.productsService.addNewProduct(this.product, userId)
      .subscribe(
        product => {
          this.product = product;
        }
      );
  }

  goBack(): void {
    this.location.back();
  }

}
