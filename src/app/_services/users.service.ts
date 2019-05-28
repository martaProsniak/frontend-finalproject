import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';

/**
 * @author Marta Prosniak
 * users service to manage users accessed by API
 */

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endpoint = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  getUsersTable(): Observable<User[]> {
    return this.http
      .get<User[]>(this.endpoint);
  }
  getUserDetails(id: number): Observable<User> {
    return this.http
      .get<User>(this.endpoint + '/' + id);
  }

  updateUser(user: User): Observable<any> {
    return this.http.post(this.endpoint + '/edit/' + user.id, user);
  }

  addNewUser(user: User): Observable<any> {
    return this.http.post(this.endpoint + '/add', user);
  }

  delete(user: User): Observable<any> {
    return this.http.post(this.endpoint + '/delete/' + user.id, user);
  }

  activate(user: User): Observable<any> {
    return this.http.post(this.endpoint + '/activate/' + user.id, user);
  }

  deactivate(user: User): Observable<any> {
    return this.http.post(this.endpoint + '/deactivate/' + user.id, user);
  }





}
