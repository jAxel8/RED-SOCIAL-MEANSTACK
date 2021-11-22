import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private _router : Router, private _userService:UserService ){}



  canActivate():boolean{
    if(this._userService.isauth()){
      return true;
    }

    this._router.navigate(['/login']);
    return false;
  }
  
}
