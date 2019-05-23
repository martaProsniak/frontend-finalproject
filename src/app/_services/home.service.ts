import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  endpoint = 'http://localhost:8080/';

  headers = new HttpHeaders({'Content-Type':  'application/json'});

  getGreeting(): void {
    this.http.get(this.endpoint);
  }

}
