import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent} from '../components/user-details/user-details.component';
import {UsersListComponent} from '../components/users-list/users-list.component';
import {UserEditComponent} from '../components/user-edit/user-edit.component';
import {ProductListComponent} from '../components/product-list/product-list.component';
import {UserAddComponent} from '../components/user-add/user-add.component';
import {UserDeleteComponent} from '../components/user-delete/user-delete.component';
import {UserActivationComponent} from '../components/user-activation/user-activation.component';
import {NoAuthComponent} from '../components/no-auth/no-auth.component';
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
import {OrderListComponent} from '../components/order-list/order-list.component';

/**
 * @author Marta Prosniak
 * routing module for declaring routes and user access
 */

const appRoutes: Routes = [
  { path: '', component: NoAuthComponent},
  { path: 'users', component: UsersListComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'register', component: UserAddComponent},
  { path: 'users-add', component: UserAddComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}},
  { path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]}},
  { path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard]},
  { path: 'users/delete/:id', component: UserDeleteComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} },
  { path: 'users/activate/:id', component: UserActivationComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin]} },
  { path: 'products-json', component: ProductJsonComponent},
  { path: 'products-users/:id', component: UsersProductsComponent, canActivate: [AuthGuard]},
  { path: 'products-add', component: ProductAddComponent, canActivate: [AuthGuard]},
  { path: 'products/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard]},
  { path: 'products/delete/:id', component: ProductDeleteComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrderListComponent, canActivate: [AuthGuard]},
  { path: 'cart/users/:id', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'order/add', component: OrderComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/login'}
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
