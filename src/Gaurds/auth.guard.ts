

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Roles } from 'src/Enums/AuthEnums/AuthEnums';
import { AuthService } from '../Services/AuthService/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLogged: boolean = false;
  userRoles: string[] = []
  constructor(private authService: AuthService, private route: Router) {
    authService.isLogged.subscribe(data => this.isLogged = data);
    authService.userRoles.subscribe(data => this.userRoles = data);
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLogged) {
      // return true;
      if (this.userRoles.includes(Roles.Admin))
      return true;

      else {
        this.route.navigate(['/']) // navigate to home page if user is not Admin
        return false
      }
    }
    else {

      alert('يجب عليك تسجيل الدخول')
      this.route.navigate(['/account/login'])
      return false;
      
    }
  }

}
