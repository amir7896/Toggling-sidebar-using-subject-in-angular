import { Injectable } from '@angular/core';
import { AuthserviceService } from '../UserAuth/authservice.service';
@Injectable({
  providedIn: 'root'
})
export class TokenService {


  constructor(private authService: AuthserviceService) { }

  intercept(req:any,next:any){
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
