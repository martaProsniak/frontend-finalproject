import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product';

/**
 * @author Marta Prosniak
 * products service to manage products accessed by API
 */

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  endpoint = 'http://localhost:8080/products';


  constructor(private http: HttpClient) { }

  getProductsTable(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.endpoint);
  }

  getProductsTableForJson(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.endpoint + '/json');
  }
  getProductDetails(id: number): Observable<Product> {
    return this.http
      .get<Product>(this.endpoint + '/' + id);
  }

  addNewProduct(product: Product, userId: number): Observable<any> {
    return this.http.post(this.endpoint + '/add/' + userId, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.endpoint + '/edit/' + product.id, product);
  }

  delete(product: Product): Observable<any> {
    return this.http.delete(this.endpoint + '/delete/' + product.id);
  }


}
