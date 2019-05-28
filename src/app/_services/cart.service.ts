import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Cart} from '../models/cart';

/**
 * @author Marta Prosniak
 * cart service to manage carts accessed by API
 */

@Injectable({
  providedIn: 'root'
})
export class CartService {

  endpoint = 'http://localhost:8080/cart';


  constructor(private http: HttpClient) { }

  getCart(id: number): Observable<any> {
    return this.http
      .get<Cart>(this.endpoint + '/' + id);
  }

  addToCart(userId: number, productId: number, cart: Cart): Observable<any> {
    return this.http.post
    (this.endpoint + '/add/product/' + productId + '/' + userId, cart);

  }

  getCarts(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.endpoint + '/list');
  }

  remove(cartId: number, productId: number, cart: Cart): Observable<any> {
    return this.http.put(this.endpoint + '/' + cartId +
    '/deleteProduct/' + productId, cart);
  }
}
