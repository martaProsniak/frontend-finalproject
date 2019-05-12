import { BrowserModule } from '@angular/platform-browser';
import {enableProdMode, NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';



const appRoutes: Routes = [
  { path: 'users/:id', component: UserDetailsComponent, pathMatch: 'full' },
  { path: 'users', component: UsersListComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UsersListComponent,
    ProductsListComponent,
    ProductsDetailsComponent
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
