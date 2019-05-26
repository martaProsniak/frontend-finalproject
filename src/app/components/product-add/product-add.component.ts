import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {ProductsService} from '../../_services/products.service';
import {Product} from '../../models/product';
import {AuthenticationService} from '../../_services/authentication.service';
import {User} from '../../models/user';

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

  saveNewProduct() {
    this.authService.currentUser.subscribe(currentUser =>
      this.currentUser = currentUser);
    const userId = this.currentUser.id;
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
