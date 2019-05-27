import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from '../components/user-details/user-details.component';
import {UsersListComponent} from '../components/users-list/users-list.component';
import {UserEditComponent} from '../components/user-edit/user-edit.component';
import {ProductListComponent} from '../components/product-list/product-list.component';
import {ProductDetailsComponent} from '../components/product-details/product-details.component';
import {UserAddComponent} from '../components/user-add/user-add.component';
import {UserDeleteComponent} from '../components/user-delete/user-delete.component';
import {UserActivationComponent} from '../components/user-activation/user-activation.component';
import {HomeComponent} from '../components/home/home.component';
import {ProductAddComponent} from '../components/product-add/product-add.component';
import {LoginComponent} from '../components/login/login.component';
import {UsersProductsComponent} from '../components/users-products/users-products.component';
import {ProductEditComponent} from '../components/product-edit/product-edit.component';
import {ProductDeleteComponent} from '../components/product-delete/product-delete.component';
import {CartComponent} from '../components/cart/cart.component';
import {ProductJsonComponent} from '../components/product-json/product-json.component';
import {OrderComponent} from '../components/order/order.component';
import {AuthGuard} from '../_guards/auth-guard';
import {Role} from '../models/role';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: UserAddComponent},
  { path: 'users-add', component: UserAddComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}},
  { path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}},
  { path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard]},
  { path: 'users/delete/:id', component: UserDeleteComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} },
  { path: 'users/activate/:id', component: UserActivationComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} },
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard]},
  { path: 'products-json', component: ProductJsonComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}},
  { path: 'products-users/:id', component: UsersProductsComponent, canActivate: [AuthGuard]},
  { path: 'products/:id', component: ProductDetailsComponent},
  { path: 'products-add', component: ProductAddComponent},
  { path: 'products-add', component: ProductAddComponent},
  { path: 'products/edit/:id', component: ProductEditComponent},
  { path: 'products/delete/:id', component: ProductDeleteComponent },
  { path: 'cart/users/:id', component: CartComponent},
  { path: 'order/add', component: OrderComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
