import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) { }

  getUsersTable() {
    return this.http
      .get<User[]>(this.apiUrl);
  }
  getUserDetails(id: number) {
    return this.http
      .get<User>(this.apiUrl + id);
  }
}
