import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = 'http://localhost:8080/products/';


  constructor(private http: HttpClient) { }

  getProductsTable(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiUrl);
  }
  getProductDetails(id: number): Observable<Product> {
    return this.http
      .get<Product>(this.apiUrl + id);
  }
}
