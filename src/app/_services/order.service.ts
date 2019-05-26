import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  endpoint = 'http://localhost:8080/orders';

  constructor(private http: HttpClient) {}

  createOrder(id: number, adress: string): Observable<any> {
    return this.http.post(this.endpoint + '/add/' + id, adress);
  }

}
