import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  host = 'http://localhost:8080/';

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(user: User): Observable<any> {
    return this.http.post(this.host + 'login', user)
      .pipe(map(currUser => {
        localStorage.setItem('currentUser', JSON.stringify(currUser));
        this.currentUserSubject.next(currUser);
        return currUser;
  }));
  }
  logout() {
    this.currentUserSubject.next(null);
    localStorage.clear();
  }
}

