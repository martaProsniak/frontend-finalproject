import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endpoint = 'http://localhost:8080/users';

  headers = new HttpHeaders({'Content-Type':  'application/json'});

  constructor(private http: HttpClient) { }

  getUsersTable(): Observable<User[]> {
    return this.http
      .get<User[]>(this.endpoint);
  }
  getUserDetails(id: number): Observable<User> {
    return this.http
      .get<User>(this.endpoint + '/' + id);
  }

  post(user: User): Observable<any> {
    return this.http.post(this.endpoint + '/edit/:id', user);
  }

  delete(user: User): Observable<any> {
    return this.http.post(this.endpoint + '/delete/' + user.id, user);
  }



}
