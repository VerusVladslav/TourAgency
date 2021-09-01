import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationPaths } from 'src/api-authorization/api-authorization.constants';
import { ApplicationRoutes, Navigation } from '../allConstans';
import { ApiResponse, LoginToken, SignInModel } from '../Models/model';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private router: Router
  ) { }
  token: LoginToken;
  statusLogin = new EventEmitter<boolean>();
  checkLogin(model: SignInModel): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(ApplicationRoutes.CheckLogin, model)

  }

  Login(model: SignInModel): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(ApplicationRoutes.Login, model)

  }

  
  getUserId(){
    const token = localStorage.getItem('token');
    if (token != null) {
      return this.token.id;
    } 
  }

  Logout() {
    localStorage.removeItem('token');


    this.statusLogin.emit(false);
    

    this.router.navigate([Navigation.Home]);
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token != null) {
      
      return true;
    } else {
      return false;
    }
  }
  getUserName(){
    let tokenfromStorage = localStorage.getItem('token');
    if (tokenfromStorage != null) {
    this.token = jwt_decode(tokenfromStorage);
    console.log( this.token);
      return this.token.name;
    } 
  }


  isAdmin() {
    
    let tokenfromStorage = localStorage.getItem('token');
    if(tokenfromStorage==null)
    {
     
      return false;
    }

    this.token = jwt_decode(tokenfromStorage);

    if (this.token.roles.indexOf('Admin') != -1) {
      return true;
    } else {
      return false;
    }
  }
}


