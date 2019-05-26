import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductsService} from '../../_services/products.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-product-json',
  templateUrl: './product-json.component.html',
  styleUrls: ['./product-json.component.css']
})
export class ProductJsonComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductsService) {
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
}
