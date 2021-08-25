import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { HotelService } from 'src/app/crud-hotel/hotel.service';
import { TownService } from 'src/app/crud-town/town.service';
import { FilterDTO, Hotel, IHotelRoom, Tour, Town } from 'src/app/Models/model';
import { TourService } from '../tour.service';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';

import { TourFilteredDemoComponent } from '../TourFilteredDemo/TourFilteredDemo.component';
@Component({
  selector: 'app-filter-tour',
  templateUrl: './filter-tour.component.html',
  styleUrls: ['./filter-tour.component.css'],
  providers: [DialogService]
})
export class FilterTourComponent implements OnInit {


  Tours:Tour[];
  
  roomList:IHotelRoom;
  town:Town;
  towns:Town[];
  hotel:Hotel;
  hotels:Hotel[];
  rangeDates: Date[];
  rangeValues: number[] = [3,14];
  
    ref: DynamicDialogRef;
  constructor(private tourService:TourService,
    private spinner:NgxSpinnerService,
    private messageService: MessageService,
    private hotelService: HotelService,
    private townService: TownService,
    public dialogService: DialogService) { }

  


  GetTowns(){
    this.townService.getAllTowns().subscribe(towns=>{
      this.towns=towns;
     // console.log(this.towns);
     this.town=this.towns[0];
    
     setTimeout(() => {
     
      this.spinner.hide();
    }, 1000);
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
        this.spinner.hide();
       
      }, 5000);
    }
    
    );
  }

  townSelected(event)
  {
   
  if(this.town!=undefined)
  {
  
  
   this.hotelService.getAllHotelsByTownId(this.town.id).subscribe(hotels=>{
    this.hotels=hotels;
   
  },
  (error: HttpErrorResponse)=>{
    setTimeout(() => {
      this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
     
      this.spinner.hide();
    }, 5000);
  }
  
  );
  }
  }
  ngOnInit() {
    this.spinner.show()
    this.GetTowns();
  
    setTimeout(() => {
     
     
      this.spinner.hide();
    }, 5000);
  }




  filterReq(event){

    // console.log(this.town);
    // console.log(this.hotel);
   if(this.town==null)
   {
    this.messageService.add( {severity:'warn', summary:'Warning', detail:'Town not selected'},);

     return;
   }
    let filter=new FilterDTO(
      this.town.id,   
      this.rangeValues[0],
      this.rangeValues[1],
      
    );

      if(this.rangeDates!=undefined)
      {
        filter.departureDate=this.rangeDates[0];
        filter.arrivalDate=this.rangeDates[1];

      }
      if(this.hotel==undefined)
      {
        filter.hotelid="";
      }

      if(this.hotel!=undefined)
      {
        filter.hotelid=this.hotel.id;

      }

    
     
      this.tourService.setFilter(filter);
     
  
    
     

      this.showList();
    

  }
  

  showList(){
    this.ref = this.dialogService.open(TourFilteredDemoComponent, {
      header: 'Tour list',
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto"},
      baseZIndex: 10000
  });

  
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}
}
