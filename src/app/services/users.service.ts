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
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

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

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  addUser(user): Observable<any> {
    console.log(user);
    return this.http.post<User>(this.endpoint + '/add', JSON.stringify(user), this.httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((user) => console.log(`added user w/ id=${user.login}`))
    );
  }

  signUp(user: User): Observable<User> {
    const url = `${this.endpoint}/add`;
    return this.http.post<User>(url, user);
  }


}
