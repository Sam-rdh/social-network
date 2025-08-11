import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router : Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthenticated ? true : this.router.navigateByUrl('login');
  }

  private isAuthenticated: boolean = false;

  getAuthState(): boolean {
    return this.isAuthenticated;
  }

  setAuthState(state: boolean): void {
    this.isAuthenticated = state;
  }

  
}
