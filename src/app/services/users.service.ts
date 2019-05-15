import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'http://localhost:8080/users/';


  constructor(private http: HttpClient) { }

  getUsersTable(): Observable<User[]> {
    return this.http
      .get<User[]>(this.apiUrl);
  }
  getUserDetails(id: number): Observable<User> {
    return this.http
      .get<User>(this.apiUrl + id);
  }

  post(user: User): Observable<any> {
    return this.http.post(this.apiUrl + 'edit/:id', user);
  }


}
