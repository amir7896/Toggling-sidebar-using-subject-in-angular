import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private _httpClient: HttpClient,
    private router: Router) { }


  registerNewUser(data:any){
    return this._httpClient.post<any>('http://localhost:3000/register', data)
  }

  loginUser(data:any){
    return this._httpClient.post<any>('http://localhost:3000/login', data)
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/dashboard']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
