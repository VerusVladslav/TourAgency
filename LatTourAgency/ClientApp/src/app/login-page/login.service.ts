import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApplicationPaths } from 'src/api-authorization/api-authorization.constants';
import { ApplicationRoutes } from '../allConstans';
import { ApiResponse, SignInModel } from '../Models/model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
    private router:Router
  ) { }
  statusLogin = new EventEmitter<boolean>();
  checkLogin(model:SignInModel):Observable<ApiResponse>{
  return  this.http.post<ApiResponse>(ApplicationRoutes.CheckLogin,model)
  
  }
  Login(model:SignInModel):Observable<ApiResponse>{
    return  this.http.post<ApiResponse>(ApplicationRoutes.Login,model)
    
    }

    LogOut(){
        this.http.post(ApplicationRoutes.Logout,null);
      
      }


      Logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
    
        this.statusLogin.emit(false);
        this.router.navigate(['/']);
      }
    
      isLoggedIn() {
        const token = localStorage.getItem('token');
        if (token != null) {
          return true;
        } else {
          return false;
        }
      }
    
      isAdmin() {
    
        const roles = localStorage.getItem('roles');
        console.log(roles);
       // const decoded = jwt_decode(token);
        if (roles === 'Admin') {
          return true;
        } else {
          return false;
        }
      }
}
