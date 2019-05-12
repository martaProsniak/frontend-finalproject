import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {UserList} from '../models/user-list';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrlList = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) { }

  getUserList() {
    return this.http
      .get<UserList>(this.apiUrlList);
  }
  getUserDetails(id: number) {
    return this.http
      .get<User>(this.apiUrlList + id);
  }
}
