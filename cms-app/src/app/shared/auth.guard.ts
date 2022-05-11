import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    //create constructor
    constructor(private router:Router){
    
    }
  canActivate(
    route: ActivatedRouteSnapshot): boolean {
          
    return true;
  }
  
}
