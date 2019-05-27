import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  endpoint = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {}

  createOrder(id: number, address: string, order: Order): Observable<any> {
    return this.http.post(this.endpoint + '/add' + id + '?address=' + address, order);
  }

}
