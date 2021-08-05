import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse, Tour } from 'src/app/Models/model';
import { ApplicationRoutes } from '../allConstans';
@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private http: HttpClient,
    private router: Router) { }
    getAllTours(): Observable<Tour[]> {
      // this.GenreList = this.http.get<Genre[]>(this.GenreUrl);
      // return this.GenreList;
      return this.http.get<Tour[]>(ApplicationRoutes.GetAllTours);
    }
    getTour(id: string): Observable<Tour> {
      return this.http.get<Tour>(ApplicationRoutes.GetTourById + id);
    }
  
    updateTour(tour: Tour): Observable<ApiResponse> {
      return this.http.put<ApiResponse>(ApplicationRoutes.UpdateTour, tour);
    }
    addTour(tour: Tour): Observable<ApiResponse> {
      return this.http.post<ApiResponse>(ApplicationRoutes.AddTour, tour);
    }
    deleteTour(id: string): Observable<ApiResponse> {
      return this.http.delete<ApiResponse>(ApplicationRoutes.DeleteTour + id);
    }
}
