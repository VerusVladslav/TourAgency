import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse, SignUpModel } from '../Models/model';
import { Observable } from 'rxjs';
import { ApplicationRoutes } from '../allConstans';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl=""
constructor(private http: HttpClient,
  private router: Router) { }
  SignUp(model: SignUpModel): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(ApplicationRoutes.Register, model);
  }
}
