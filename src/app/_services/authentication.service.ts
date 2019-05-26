import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {map} from 'rxjs/operators';
import { CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  host = 'http://localhost:8080/';

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient,
              private cookieService: CookieService) {
    const currentSession = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    cookieService.set('currentUser', currentSession);
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(user: User): Observable<any> {
    return this.http.post(this.host + 'login', user)
      .pipe(map(currentUser => {
        this.cookieService.set('currentUser', JSON.stringify(currentUser));
        this.currentUserSubject.next(currentUser);
        return currentUser;
  }));
  }
  logout() {
    this.currentUserSubject.next(null);
    this.cookieService.delete('currentUser');
  }
}

