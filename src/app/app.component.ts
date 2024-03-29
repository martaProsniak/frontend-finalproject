import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './_services/authentication.service';
import {User} from './models/user';

/**
 * @author Marta Prosniak
 * Main application component
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Connect.com';
  currentUser: User;

  constructor(private http: HttpClient,
              private translate: TranslateService,
              private router: Router,
              private authService: AuthenticationService) {
    translate.setDefaultLang('en');
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }
  // logouts user
  logout() {
    console.log(this.currentUser);
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  // translate application content to polish
  translatePl(): void {
    this.translate.setDefaultLang('pl');
  }
  // translate application content to english
  translateEn(): void {
    this.translate.setDefaultLang('en');
  }
}


