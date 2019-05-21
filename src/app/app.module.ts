import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersService} from './_services/users.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserActivationComponent } from './components/user-activation/user-activation.component';
import { HomeComponent } from './components/home/home.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import {ProductsService} from './_services/products.service';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UsersListComponent,
    UserEditComponent,
    ProductListComponent,
    ProductDetailsComponent,
    UserAddComponent,
    UserDeleteComponent,
    UserActivationComponent,
    HomeComponent,
    ProductAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    UsersService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
