import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { ApiResponse, Hotel, IFood, IHotelRoom } from 'src/app/Models/model';
import { ApplicationRoutes, ForKidsServiceCostants,
  EntertainmentAndSportServiceCostants,BeachHotelServiceConstants,
  GenerelServiceConstants, 
  IHotelServices} from '../allConstans';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

 

  BleachServices :any[]=[
    
      {name:BeachHotelServiceConstants.Beach_towels},
      {name:BeachHotelServiceConstants.Own},
      {name:BeachHotelServiceConstants.Sandy},
      {name:BeachHotelServiceConstants.Sandy_pebble},
      {name:BeachHotelServiceConstants.Sun_loungers},
      {name:BeachHotelServiceConstants.Umbrellas},
      {name:BeachHotelServiceConstants.Urban},
      {name:BeachHotelServiceConstants.Windsurfing}

  ];
  EntertainmentAndSportServices: any[] = [
    {name:EntertainmentAndSportServiceCostants.Aerobics},
    {name:EntertainmentAndSportServiceCostants.Animation},
    {name:EntertainmentAndSportServiceCostants.Aquapark},
    {name:EntertainmentAndSportServiceCostants.Bath},
    {name:EntertainmentAndSportServiceCostants.Bike_rental},
    {name:EntertainmentAndSportServiceCostants.Billiards},
    {name:EntertainmentAndSportServiceCostants.Disco},
    {name:EntertainmentAndSportServiceCostants.Diving},
    {name:EntertainmentAndSportServiceCostants.Event_organization_service},
    {name:EntertainmentAndSportServiceCostants.Fitness_center},
    {name:EntertainmentAndSportServiceCostants.Golf},
    {name:EntertainmentAndSportServiceCostants.Gym},
    {name:EntertainmentAndSportServiceCostants.Hamam},
    {name:EntertainmentAndSportServiceCostants.Jacuzzi},
    {name:EntertainmentAndSportServiceCostants.Organization_of_excursions},
    {name:EntertainmentAndSportServiceCostants.Pier},
    {name:EntertainmentAndSportServiceCostants.Pontoon},
    {name:EntertainmentAndSportServiceCostants.Sauna},
    {name:EntertainmentAndSportServiceCostants.Spa_center},
    {name:EntertainmentAndSportServiceCostants.Table_tennis},
    {name:EntertainmentAndSportServiceCostants.Tennis_court},
    {name:EntertainmentAndSportServiceCostants.Volleyball},
    {name:EntertainmentAndSportServiceCostants.Water_sports_on_the_beach},
    {name:EntertainmentAndSportServiceCostants.Wellness_center},
    {name:EntertainmentAndSportServiceCostants.Windsurfing}



  ];

  ForKidsServices :IHotelServices[]=[
    {name:ForKidsServiceCostants.Children_menu_in_the_restaurant},
    {name:ForKidsServiceCostants.Children_room},
    {name:ForKidsServiceCostants.Children_swimming_pool},
    {name:ForKidsServiceCostants.Mini_club},
    {name:ForKidsServiceCostants.Nanny},
    {name:ForKidsServiceCostants.Payground},
    {name:ForKidsServiceCostants.Рighchairs_in_the_restaurant},
    {name:ForKidsServiceCostants.Сot}

  ];

  GeneralService: any[]=[
    {name:GenerelServiceConstants.Bar},
    {name:GenerelServiceConstants.Beauty_saloon},
    {name:GenerelServiceConstants.Cafe},
    {name:GenerelServiceConstants.Car_rental},
    {name:GenerelServiceConstants.Conference_hall},
    {name:GenerelServiceConstants.Currency_exchange},
    {name:GenerelServiceConstants.Doctor},
    {name:GenerelServiceConstants.Elconditions_for_disabled_people},
    {name:GenerelServiceConstants.Elevator},
    {name:GenerelServiceConstants.Late_check_out},
    {name:GenerelServiceConstants.Laundry},
    {name:GenerelServiceConstants.Non_smoking_rooms},
    {name:GenerelServiceConstants.Open_pool},
    {name:GenerelServiceConstants.Parking},
    {name:GenerelServiceConstants.Payment_by_payment_cards},
    {name:GenerelServiceConstants.Restaurant},
    {name:GenerelServiceConstants.Safe},
    {name:GenerelServiceConstants.Transfer_to_from_the_airport},
    {name:GenerelServiceConstants.Wi_Fi}
   
  ];




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
    deleteHotelRange(hotel: Hotel[]): Observable<ApiResponse[]> {
      return this.http.put<ApiResponse[]>(ApplicationRoutes.HotelRemoveRange,hotel);
    }

    addHotelRommsToHotel(listRooms:IHotelRoom[],id:string):Observable<ApiResponse>  {
      return this.http.put<ApiResponse>(ApplicationRoutes.AddHotelRoomsToHotel+id, listRooms);
    }

    addFoodToHotel(listFoods:IFood[]):Observable<ApiResponse>  {
      return this.http.put<ApiResponse>(ApplicationRoutes.AddFoodsToHotel, listFoods);
    }

    getHotelRomms(id: string): Observable<IHotelRoom[]> {
      return this.http.get<IHotelRoom[]>(ApplicationRoutes.GetHotelRoomsHotel + id);
    }

    getFoods(id: string): Observable<IFood[]> {
      return this.http.get<IFood[]>(ApplicationRoutes.GetFoodsHotel + id);
    }

    updateHotelRomms(listhotel: IHotelRoom[]): Observable<ApiResponse> {
      return this.http.put<ApiResponse>(ApplicationRoutes.UpdateHotelRoomsHotel, listhotel);
    }

    updateFoods(listhotel: IFood[]): Observable<ApiResponse> {
      return this.http.put<ApiResponse>(ApplicationRoutes.UpdateFoodsHotel, listhotel);
    }


    deleteFoodsByIdHotel(idHotel: string): Observable<ApiResponse> {
      return this.http.delete<ApiResponse>(ApplicationRoutes.DeleteFoodsHotel + idHotel);
    }

    deleteHotelsRoomByIdHotel(idHotel: string): Observable<ApiResponse> {
      return this.http.delete<ApiResponse>(ApplicationRoutes.DeleteHotelRoomsHotel + idHotel);
    }


    getArrayForKids(): IHotelServices[]{
        return this.ForKidsServices;
    }
    getArrayBleach(): any[]{
      return this.BleachServices;
  } 
  getArrayEntertainment(): any[]{
    return this.EntertainmentAndSportServices;
  }
  getArrayGeneral(): any[]{
      return this.GeneralService;
  }

  // changeGeneralServices(selected:string[]):string[]  {
   
  //    let GenerealArray=this.GeneralService;

  //    GenerealArray.forEach( element => {
  //     selected.forEach(selectedElements => {          
  //       {
  //        if(element===selectedElements)
  //        {
  //          let index=GenerealArray.indexOf(element);
          
  //         GenerealArray.slice(index,1);
  //        }
  //       }
  //     });
  //    });

     
      
    


  //     return GenerealArray;
  // }

  // changeForKiadsServices(selected:string[]):IHotelServices[]  {
     
  //   console.log(selected);
  //   if(selected!=undefined){
   
      
  //     let ForKidsArraythis=this.ForKidsServices;

  //     this.ForKidsServices.forEach(element=>{
  //       selected.forEach(Selected=>{
  //         if(element.name==Selected)
  //         {
  //           console.log(element);
  //           let index=ForKidsArraythis.indexOf(element);
  //           console.log(index);
  //           if (index > -1) {
  //             ForKidsArraythis.splice(index, 1);
  //          }
  //         //  ForKidsArraythis= ForKidsArraythis.slice(index,1);
  //         //  console.log("Arra");
  //          // console.log(ForKidsArraythis);

  //         }
  //       });

  //     });
  //       return ForKidsArraythis;

  //   }
   
    
    
    


    
    


  //     return this.ForKidsServices;
  // }
}
