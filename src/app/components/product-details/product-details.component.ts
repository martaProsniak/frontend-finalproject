import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Product} from '../../models/product';
import {ProductsService} from '../../_services/products.service';

/**
 * @author Marta
 * gets info about specified product from API
 */

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product = new Product();


  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('orderid'));
    this.productsService
      .getProductDetails(id)
      .subscribe(result => {
        this.product = result;
      });
  }

  goBack(): void {
    this.location.back();
  }

}
