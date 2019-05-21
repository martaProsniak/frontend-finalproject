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

  private currentUserSubcjet: BehaviorSubject<any>;
  private currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubcjet = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubcjet.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubcjet.value;
  }

  login(user: User): Observable<any> {
    return this.http.post(this.host + 'login', user)
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubcjet.next(user);
        return user;
  }));
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubcjet.next(null);
  }
}

