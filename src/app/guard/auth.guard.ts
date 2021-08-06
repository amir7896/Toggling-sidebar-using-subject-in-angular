import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { AuthserviceService } from '../services/UserAuth/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthserviceService,
    private router: Router){}
  canActivate(): boolean{
    if(this.authService.loggedIn()){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
