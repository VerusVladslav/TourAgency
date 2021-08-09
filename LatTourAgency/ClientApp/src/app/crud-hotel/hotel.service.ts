import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse, Hotel } from 'src/app/Models/model';
import { ApplicationRoutes } from '../allConstans';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient,
    private router: Router) { }


    getAllHotels(): Observable<Hotel[]> {
      // this.GenreList = this.http.get<Genre[]>(this.GenreUrl);
      // return this.GenreList;
      return this.http.get<Hotel[]>(ApplicationRoutes.GetAllHotels);
    }
    getHotel(id: string): Observable<Hotel> {
      return this.http.get<Hotel>(ApplicationRoutes.GetHotelById + id);
    }
  
    updateHotel(hotel: Hotel): Observable<ApiResponse> {
      return this.http.put<ApiResponse>(ApplicationRoutes.UpdateHotel, hotel);
    }
    addHotel(hotel: Hotel): Observable<ApiResponse> {
      return this.http.post<ApiResponse>(ApplicationRoutes.AddHotel, hotel);
    }
    deleteHotel(id: string): Observable<ApiResponse> {
      return this.http.delete<ApiResponse>(ApplicationRoutes.DeleteHotel + id);
    }
}
