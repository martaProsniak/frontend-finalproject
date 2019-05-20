import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Connect.com';

  constructor(private http: HttpClient,
              private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  translatePl(): void {
    this.translate.setDefaultLang('pl');
  }

  translateEn(): void {
    this.translate.setDefaultLang('en');
  }
}


