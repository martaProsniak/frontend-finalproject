import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product';
import {ProductsService} from '../../services/products.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = new Product();
  deleted = false;

  constructor(private productService: ProductsService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService
      .getProductDetails(id)
      .subscribe(result => {
        this.product = result;
      });
  }
  goBack(): void {
    this.location.back();
  }

  deleteProduct(): void {
    this.productService.delete(this.product).subscribe(result => this.deleted = true);
  }
}
