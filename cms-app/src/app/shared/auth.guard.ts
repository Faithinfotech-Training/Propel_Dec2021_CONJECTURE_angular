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
    //expected role: from url
    const expectedRole = route.data.role;
    //current role: Sessionstorage
    const currentRole=sessionStorage.getItem("ACCESS_ROLE");
    if(currentRole !==expectedRole){
      this.router.navigateByUrl('login');
    return false;
  }
  return true;
  }
  
}
