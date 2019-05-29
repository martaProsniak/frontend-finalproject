import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ProductsService} from '../../_services/products.service';

/**
 * @author Mateusz Kalwaj
 * component to edit product
 */

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product();
  edited = false;

  constructor(private productService: ProductsService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('orderid'));
    this.productService
      .getProductDetails(id)
      .subscribe(result => {
        this.product = result;
      });
  }

  // saves user changes in database
  saveProductChanges() {
    this.productService.updateProduct(this.product)
      .subscribe(
        product => {
          this.product = product;
          this.edited = true;
        }
      );
  }

  goBack(): void {
    this.location.back();
  }

}
