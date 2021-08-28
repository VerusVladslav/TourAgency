import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse, FilterDTO, Gallery, ImageTour, Review, Tour } from 'src/app/Models/model';
import { ApplicationRoutes } from '../allConstans';
@Injectable({
  providedIn: 'root'
})
export class TourService {

  filterTours:FilterDTO;

  constructor(private http: HttpClient,
    private router: Router) { }
    getAllTours(): Observable<Tour[]> {
      // this.GenreList = this.http.get<Genre[]>(this.GenreUrl);
      // return this.GenreList;
      return this.http.get<Tour[]>(ApplicationRoutes.GetAllTours);
    }
    getTour(id:string): Observable<Tour> {
      return this.http.get<Tour>(ApplicationRoutes.GetTourById+id);
    }
    getTourGallery(id:string): Observable<Gallery[]> {
      return this.http.get<Gallery[]>(ApplicationRoutes.GetTourGallery+id);
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
    addGallery(gallery:ImageTour[],idTour:string):Observable<ApiResponse> {
      return this.http.put<ApiResponse>(ApplicationRoutes.AddTourGallery+idTour, gallery);
    }
    UpdateGallery(gallery:ImageTour[],idTour:string):Observable<ApiResponse> {
      return this.http.put<ApiResponse>(ApplicationRoutes.UpdateTourGallery+idTour, gallery);
    }

    setFilter(filter:FilterDTO){
      this.filterTours=filter;
    }
    getFilter():FilterDTO{
      return this.filterTours;
    }
    getFilteredTourList():Observable<Tour[]>
    {
     
      return this.http.post<Tour[]>(ApplicationRoutes.GetFilteredTours,this.filterTours);
    }
    deleteTOurRange(tours: Tour[]): Observable<ApiResponse[]> {
      return this.http.put<ApiResponse[]>(ApplicationRoutes.DeleteRangeTour,tours);
    }

    addReview(review:Review):Observable<ApiResponse> {
      return this.http.post<ApiResponse>(ApplicationRoutes.AddReview,review);
    }

    getReviews(tourId:string):Observable<Review[]> {
      return this.http.get<Review[]>(ApplicationRoutes.GetReviews+tourId);
    }

}
