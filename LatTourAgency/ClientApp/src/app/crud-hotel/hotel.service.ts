import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { Observable } from 'rxjs';
import { ApiResponse, Hotel, IFood, IHotelRoom,IHotelServices } from 'src/app/Models/model';
import { ApplicationRoutes, ForKidsServiceCostants,
  EntertainmentAndSportServiceCostants,BeachHotelServiceConstants,
  GenerelServiceConstants,
  HotelRoomConstants,
  FoodConstants,
  } from '../allConstans';
@Injectable({
  providedIn: 'root'
})
export class HotelService {

 

  BleachServices :any[]=[
    
      {service:BeachHotelServiceConstants.Beach_towels},
      {service:BeachHotelServiceConstants.Own},
      {service:BeachHotelServiceConstants.Sandy},
      {service:BeachHotelServiceConstants.Sandy_pebble},
      {service:BeachHotelServiceConstants.Sun_loungers},
      {service:BeachHotelServiceConstants.Umbrellas},
      {service:BeachHotelServiceConstants.Urban},
      {service:BeachHotelServiceConstants.Windsurfing}

  ];
  EntertainmentAndSportServices: any[] = [
    {service:EntertainmentAndSportServiceCostants.Aerobics},
    {service:EntertainmentAndSportServiceCostants.Animation},
    {service:EntertainmentAndSportServiceCostants.Aquapark},
    {service:EntertainmentAndSportServiceCostants.Bath},
    {service:EntertainmentAndSportServiceCostants.Bike_rental},
    {service:EntertainmentAndSportServiceCostants.Billiards},
    {service:EntertainmentAndSportServiceCostants.Disco},
    {service:EntertainmentAndSportServiceCostants.Diving},
    {service:EntertainmentAndSportServiceCostants.Event_organization_service},
    {service:EntertainmentAndSportServiceCostants.Fitness_center},
    {service:EntertainmentAndSportServiceCostants.Golf},
    {service:EntertainmentAndSportServiceCostants.Gym},
    {service:EntertainmentAndSportServiceCostants.Hamam},
    {service:EntertainmentAndSportServiceCostants.Jacuzzi},
    {service:EntertainmentAndSportServiceCostants.Organization_of_excursions},
    {service:EntertainmentAndSportServiceCostants.Pier},
    {service:EntertainmentAndSportServiceCostants.Pontoon},
    {service:EntertainmentAndSportServiceCostants.Sauna},
    {service:EntertainmentAndSportServiceCostants.Spa_center},
    {service:EntertainmentAndSportServiceCostants.Table_tennis},
    {service:EntertainmentAndSportServiceCostants.Tennis_court},
    {service:EntertainmentAndSportServiceCostants.Volleyball},
    {service:EntertainmentAndSportServiceCostants.Water_sports_on_the_beach},
    {service:EntertainmentAndSportServiceCostants.Wellness_center},
    {service:EntertainmentAndSportServiceCostants.Windsurfing}



  ];

  ForKidsServices :any[]=[
    {service:ForKidsServiceCostants.Children_menu_in_the_restaurant},
    {service:ForKidsServiceCostants.Children_room},
    {service:ForKidsServiceCostants.Children_swimming_pool},
    {service:ForKidsServiceCostants.Mini_club},
    {service:ForKidsServiceCostants.Nanny},
    {service:ForKidsServiceCostants.Payground},
    {service:ForKidsServiceCostants.Рighchairs_in_the_restaurant},
    {service:ForKidsServiceCostants.Сot}

  ];

  GeneralService: any[]=[
    {service:GenerelServiceConstants.Bar},
    {service:GenerelServiceConstants.Beauty_saloon},
    {service:GenerelServiceConstants.Cafe},
    {service:GenerelServiceConstants.Car_rental},
    {service:GenerelServiceConstants.Conference_hall},
    {service:GenerelServiceConstants.Currency_exchange},
    {service:GenerelServiceConstants.Doctor},
    {service:GenerelServiceConstants.Elconditions_for_disabled_people},
    {service:GenerelServiceConstants.Elevator},
    {service:GenerelServiceConstants.Late_check_out},
    {service:GenerelServiceConstants.Laundry},
    {service:GenerelServiceConstants.Non_smoking_rooms},
    {service:GenerelServiceConstants.Open_pool},
    {service:GenerelServiceConstants.Parking},
    {service:GenerelServiceConstants.Payment_by_payment_cards},
    {service:GenerelServiceConstants.Restaurant},
    {service:GenerelServiceConstants.Safe},
    {service:GenerelServiceConstants.Transfer_to_from_the_airport},
    {service:GenerelServiceConstants.Wi_Fi}
   
  ];

  HotelRooms:any[]=[
    {name:HotelRoomConstants.Single},
    {name:HotelRoomConstants.Double},
    {name:HotelRoomConstants.Child},
    {name:HotelRoomConstants.Triple},
    {name:HotelRoomConstants.Extra_Bed},
    {name:HotelRoomConstants.Vip}
  ];

  HotelFood:any[]=[
    {name:FoodConstants.Food_Without},
    {name:FoodConstants.Food_Breakfast},
    {name:FoodConstants.Food_Dinner},
    {name:FoodConstants.Food_FullPassion},
    {name:FoodConstants.Food_Ultra},
    {name:FoodConstants.Food_AllInclusive},

   
  ];

  constructor(private http: HttpClient,
    private router: Router) { }


    getAllHotels(): Observable<Hotel[]> {
 
      return this.http.get<Hotel[]>(ApplicationRoutes.GetAllHotels);
    }

    getAllHotelsByTownId(townid:string): Observable<Hotel[]> {
     
      return this.http.get<Hotel[]>(ApplicationRoutes.GetHotelsByTownId+townid);
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
    deleteHotel(id: string): Observable<ApiResponse[]> {
      return this.http.delete<ApiResponse[]>(ApplicationRoutes.DeleteHotel + id);
    }
    deleteHotelRange(hotel: Hotel[]): Observable<ApiResponse[]> {
      return this.http.put<ApiResponse[]>(ApplicationRoutes.HotelRemoveRange,hotel);
    }

    addHotelRommsToHotel(listRooms:IHotelRoom[],id:string):Observable<ApiResponse>  {
      return this.http.put<ApiResponse>(ApplicationRoutes.AddHotelRoomsToHotel+id, listRooms);
    }

    addFoodToHotel(listFoods:IFood[],id:string):Observable<ApiResponse>  {
      return this.http.put<ApiResponse>(ApplicationRoutes.AddFoodsToHotel+id, listFoods);
    }

    addServicesToHotel(listServices:IHotelServices[],id:string):Observable<ApiResponse>  {
      return this.http.put<ApiResponse>(ApplicationRoutes.AddServiceByHotelId+id, listServices);
    }

    getHotelRomms(id: string): Observable<IHotelRoom[]> {
      return this.http.get<IHotelRoom[]>(ApplicationRoutes.GetHotelRoomsHotel + id);
    }

    getFoods(id: string): Observable<IFood[]> {
      return this.http.get<IFood[]>(ApplicationRoutes.GetFoodsHotel + id);
    }

    updateHotelRomms(listhotel: IHotelRoom[],idHotel:string): Observable<ApiResponse> {
      return this.http.put<ApiResponse>(ApplicationRoutes.UpdateHotelRoomsHotel+idHotel, listhotel);
    }

    updateFoods(listfood: IFood[],idHotel:string): Observable<ApiResponse> {
      return this.http.put<ApiResponse>(ApplicationRoutes.UpdateFoodsHotel+idHotel, listfood);
    }

    
    updateServices(listService: IHotelServices[],idHotel:string): Observable<ApiResponse> {
      return this.http.put<ApiResponse>(ApplicationRoutes.UpdateServiceByHotelId+idHotel, listService);
    }
    // deleteFoodsByIdHotel(idHotel: string): Observable<ApiResponse> {
    //   return this.http.delete<ApiResponse>(ApplicationRoutes.DeleteFoodsHotel + idHotel);
    // }

    // deleteServicesByIdHotel(idHotel: string): Observable<ApiResponse> {
    //   return this.http.delete<ApiResponse>(ApplicationRoutes.DeleteServiceByHotelId + idHotel);
    // }

    // deleteHotelsRoomByIdHotel(idHotel: string): Observable<ApiResponse> {
    //   return this.http.delete<ApiResponse>(ApplicationRoutes.DeleteHotelRoomsHotel + idHotel);
    // }


    getArrayForKids(): any[]{
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

  getSportServices(hotelId:string): Observable<IHotelServices[]>{
    return this.http.get<IHotelServices[]>(ApplicationRoutes.GetSportServiceByHotelId + hotelId);
  }

  getForKidsServices(hotelId:string): Observable<IHotelServices[]>{
    return this.http.get<IHotelServices[]>(ApplicationRoutes.GetForKidsServiceByHotelId + hotelId);
  }
  getGeneralServices(hotelId:string): Observable<IHotelServices[]>{
    return this.http.get<IHotelServices[]>(ApplicationRoutes.GetGeneralServiceByHotelId + hotelId);
  }
  getBeachServices(hotelId:string): Observable<IHotelServices[]>{
    return this.http.get<IHotelServices[]>(ApplicationRoutes.GetBeachServiceByHotelId + hotelId);
  }

  getAllServices(hotelId:string): Observable<IHotelServices[]>{
    return this.http.get<IHotelServices[]>(ApplicationRoutes.GetAllHotelService + hotelId);
  }


  getHotelRoomConstantsList(): any[]{
    return this.HotelRooms;
  }
  getHotelFoodsConstantsList(): any[]{
    return this.HotelFood;
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
