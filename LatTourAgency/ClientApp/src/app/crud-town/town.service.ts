import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse, Town } from 'src/app/Models/model';
import { ApplicationRoutes } from '../allConstans';
@Injectable({
  providedIn: 'root'
})
export class TownService {

  constructor(private http: HttpClient,
    private router: Router) { }


    getAllTowns(): Observable<Town[]> {
      
      return this.http.get<Town[]>(ApplicationRoutes.GetAllTowns);
    }
    getTown(id: string): Observable<Town> {
      return this.http.get<Town>(ApplicationRoutes.GetTownById + id);
    }
  
    updateTown(town: Town): Observable<ApiResponse> {
      return this.http.put<ApiResponse>(ApplicationRoutes.UpdateTown, town);
    }
    addTown(town: Town): Observable<ApiResponse> {
      return this.http.post<ApiResponse>(ApplicationRoutes.AddTown, town);
    }
    deleteTown(id: string): Observable<ApiResponse> {
      return this.http.delete<ApiResponse>(ApplicationRoutes.DeleteTown + id);
    }
    deleteTownRange(towns : Town[]): Observable<ApiResponse[]> {
      return this.http.put<ApiResponse[]>(ApplicationRoutes.TownRemoveRange,towns);
    }
}
