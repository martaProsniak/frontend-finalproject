import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: UserAddComponent},
  { path: 'users-add', component: UserAddComponent},
  { path: 'users/:id', component: UserDetailsComponent},
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/delete/:id', component: UserDeleteComponent },
  { path: 'users/activate/:id', component: UserActivationComponent },
  { path: 'users/deactivate/:id', component: UserActivationComponent },
  { path: 'products', component: ProductListComponent},
  { path: 'products-json', component: ProductJsonComponent},
  { path: 'products-users/:id', component: UsersProductsComponent},
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
