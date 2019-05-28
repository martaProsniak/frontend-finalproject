import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService} from '../_services/authentication.service';
import {UsersService} from '../_services/users.service';
import {User} from '../models/user';
import {isObject} from 'rxjs/internal-compatibility';

/**
 * @author Marta Prosniak
 * Authentication guard to verify user access
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  currentUser: User;

  constructor(
    private router: Router,
    private auth: AuthenticationService
  ) {
  }
  // check if user can access specified route
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.auth.currentUser.subscribe(user =>
    this.currentUser = user);
    if (isObject(this.currentUser)) {
      // check if route is restricted by role
      if (route.data.roles && route.data.roles.indexOf(this.currentUser.role) === -1) {
        // role not authorised so redirect to info page
        this.router.navigate(['/']);
        return false;
      }

      // authorised so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
