import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AccountService } from '../../services/account.service';

@Injectable()
export class AuthGaurd implements CanActivate {

  constructor(private _AccountService: AccountService,
              private route: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if (!this._AccountService.isAuthenticated){
      this.route.navigate(['home']);
      return false;

    } else {
      return true;
    }
  }
}
