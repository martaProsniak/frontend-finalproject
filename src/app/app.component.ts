import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Connect.com';
  currentUser: any;

  constructor(private http: HttpClient,
              private translate: TranslateService,
              private router: Router,
              private authService: AuthenticationService) {
    translate.setDefaultLang('en');
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  translatePl(): void {
    this.translate.setDefaultLang('pl');
  }

  translateEn(): void {
    this.translate.setDefaultLang('en');
  }
}


