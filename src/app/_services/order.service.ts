import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../models/order';

/**
 * @author Marta Prosniak
 * order service to manage orders accessed by api
 */

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  endpoint = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {}

  createOrder(cartId: number, order: Order): Observable<any> {
    return this.http.post(this.endpoint + '/add/cart/' + cartId, order);
  }

}
