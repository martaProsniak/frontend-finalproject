import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import {FormsModule} from '@angular/forms';



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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
