import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {Location} from '@angular/common';
import {ProductsService} from '../../_services/products.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product;


  constructor( private location: Location,
               private productsService: ProductsService) {
    this.product = new Product();

  }

  ngOnInit(): void {
  }

  saveNewProduct() {
    this.productsService.addNewProduct(this.product)
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
