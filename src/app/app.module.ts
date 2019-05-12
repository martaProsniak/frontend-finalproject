import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode, NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment.prod';



const appRoutes: Routes = [
  { path: 'users/:id', component: UserDetailsComponent, pathMatch: 'full' },
  { path: 'users', component: UsersListComponent, pathMatch: 'full' }
];

if (environment.production) {
  enableProdMode();
}

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
