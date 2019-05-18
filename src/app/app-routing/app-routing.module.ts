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


const appRoutes: Routes = [
  { path: 'users/:id', component: UserDetailsComponent, pathMatch: 'full' },
  { path: 'users', component: UsersListComponent, pathMatch: 'full' },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/delete/:id', component: UserDeleteComponent },
  { path: 'users-register', component: UserAddComponent},
  { path: 'products', component: ProductListComponent, pathMatch: 'full' },
  { path: 'products/:id', component: ProductDetailsComponent, pathMatch: 'full' }
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
