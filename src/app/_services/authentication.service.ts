import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {map} from 'rxjs/operators';
import { CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

/**
 * @author Marta Prosniak
 * Authentication service to authenticate user
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  host = 'http://localhost:8080/';

  // current user as observable
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router) {
    const currentSession = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    cookieService.set('currentUser', currentSession);
  }

  // login method
  login(user: User): Observable<any> {
    return this.http.post(this.host + 'login', user)
      .pipe(map(currentUser => {
        this.cookieService.set('currentUser', JSON.stringify(currentUser));
        this.currentUserSubject.next(currentUser);
        return currentUser;
      }));
  }

  // logout method
  logout() {
    this.cookieService.delete('currentUser');
    this.currentUserSubject.next(null);
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

}

