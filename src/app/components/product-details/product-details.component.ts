import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Product} from '../../models/product';
import {ProductsService} from '../../services/products.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();
  seller: User;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productsService
      .getProductDetails(id)
      .subscribe(result => {
        this.product = result;
        this.seller = this.product.seller;
        console.log(this.product.seller.login);
      });
  }

  goBack(): void {
    this.location.back();
  }

}
