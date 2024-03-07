import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { SnackbarService } from './snackbar.service';
import { GlobalConstants } from '../shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor(
    public auth: AuthService,
    public router: Router,
    private snackbarService: SnackbarService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoleArray = route.data.expectedRole;

    const token = localStorage.getItem('token');
    let tokenPayLoad: any;

    try {
      tokenPayLoad = (token);  

    } catch (err) {
      localStorage.clear();
      this.router.navigate(['/']);
      return false;
    }

    let checkRole = false;

    for (let i = 0; i < expectedRoleArray.length; i++) {
      if (expectedRoleArray[i] === tokenPayLoad.role) {
        checkRole = true;
        break; 
      }
    }

    if ((tokenPayLoad.role === 'user' || tokenPayLoad.role === 'admin') &&
        this.auth.isAuthenticated() && checkRole) {
      return true;
    } else {
      this.snackbarService.openSnackBar(GlobalConstants.unauthorized, GlobalConstants.error);
      this.router.navigate(['/cafe/dashboard']);
      return false;
    }
  }
}
