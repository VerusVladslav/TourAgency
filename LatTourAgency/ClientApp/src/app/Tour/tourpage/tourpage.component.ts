import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Hotel, IHotelServices, Tour, Town } from 'src/app/Models/model';
import { ActivatedRoute} from '@angular/router';
import { TourService } from '../tour.service';
import { MessageService } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { faChild } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons';
import { faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faConciergeBell } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { HotelService } from 'src/app/crud-hotel/hotel.service';



@Component({
  selector: 'app-tourpage',
  templateUrl: './tourpage.component.html',
  styleUrls: ['./tourpage.component.css'],
  
  
})
export class TourpageComponent implements OnInit {

  // tour: Tour = new Tour('name',
  // 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',5,220.2,
  // "desc",'short desc',"1",10)
  faChild=faChild;
  faInfo=faInfo;
  faVolleyballBall=faVolleyballBall;
  faUmbrellaBeach=faUmbrellaBeach;
  faInfoCircle=faInfoCircle;
  faHotel=faHotel;
  faConciergeBell=faConciergeBell;
  faComment=faComment;
  rating=0;
  faDollarSign=faDollarSign;

  tour:Tour
  =new Tour("Name",
  "https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg",150,"Sesc","short",10,"2","Town","Hotel");
  images: any[]=[

  
    
    {
      "previewImageSrc": "https://www.mywanderlust.pl/wp-content/uploads/2018/08/travel-to-lviv-ukraine-21.jpg",
      "thumbnailImageSrc": "https://www.mywanderlust.pl/wp-content/uploads/2018/08/travel-to-lviv-ukraine-21.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },
  {
      "previewImageSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "thumbnailImageSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "alt": "Description for Image 2",
      "title": "Title 2"
  },
  {
      "previewImageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_E2SpiEYClIESG0zGhT7jGiNzv6GCA2rNFA&usqp=CAU",
      "thumbnailImageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_E2SpiEYClIESG0zGhT7jGiNzv6GCA2rNFA&usqp=CAU",
      "alt": "Description for Image 3",
      "title": "Title 3"
  },
  {
      "previewImageSrc": "https://wantsee.world/wp-content/uploads/2020/05/Lviv-Ukraine.-Travel.jpg",
      "thumbnailImageSrc": "https://wantsee.world/wp-content/uploads/2020/05/Lviv-Ukraine.-Travel.jpg",
      "alt": "Description for Image 4",
      "title": "Title 4"
  },
  {
      "previewImageSrc": "https://www.visaukraine.com/wp-content/uploads/sites/21/2021/01/lviv-entry-requirements-1280x720.jpg",
      "thumbnailImageSrc": "https://www.visaukraine.com/wp-content/uploads/sites/21/2021/01/lviv-entry-requirements-1280x720.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  },
  {
      "previewImageSrc": "https://cdn.turkishairlines.com/m/501a497e3aa110e5/original/Travel-Guide-of-Lviv-via-Turkish-Airlines.jpg",
      "thumbnailImageSrc": "https://cdn.turkishairlines.com/m/501a497e3aa110e5/original/Travel-Guide-of-Lviv-via-Turkish-Airlines.jpg",
      "alt": "Description for Image 6",
      "title": "Title 6"
  },
  
 
    ];
  

    responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  displayBasic: boolean;

  hotel:Hotel;
  SportServices:IHotelServices[]=[];
  GeneralServices:IHotelServices[]=[];
  ForKidsServices:IHotelServices[]=[];
  BeachServices:IHotelServices[]=[];

  columns: number[];
  constructor(private spinner: NgxSpinnerService,
    private tourService: TourService,
    private messageService: MessageService,
    private activateRoute: ActivatedRoute,
    private hotelService: HotelService) { }

  ngOnInit() {
    
  //   this.spinner.show();

  

  this.spinner.show()
    
  this.getTourAndHOtel();
  

  setTimeout(() => {
   
    this.spinner.hide();
  }, 5000);

  }
  
  addColumn() {
    this.columns.push(this.columns.length);
}

removeColumn() {
    this.columns.splice(-1, 1);
}
  getTourAndHOtel()
  {
    let id = this.activateRoute.snapshot.paramMap.get('id') ;
   
   
    this.tourService.getTour(id).subscribe(tour=>{
      this.tour=tour;
      
      this.getHotel();
      this.getHotelServices();
      console.log(this.ForKidsServices);
      console.log(this.BeachServices);
      console.log(this.GeneralServices);
      console.log(this.SportServices);

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
  
  getHotel()
  {
   
   
    this.hotelService.getHotel(this.tour.hotelId).subscribe(hotel=>{
      this.hotel=hotel;
      

     
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
       
        this.spinner.hide();
      }, 5000);
    }
    
    );
  }

  getHotelServices()
  {
    this.hotelService.getSportServices(this.tour.hotelId).subscribe(sport=>{
      
      for (let index = 0; index < sport.length; index++) {
        const element = sport[index];
         this.SportServices.push(element);
      }
     
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
       
        this.spinner.hide();
      }, 5000);
    }
    
    );
    this.hotelService.getBeachServices(this.tour.hotelId).subscribe(beach=>{
       for (let index = 0; index < beach.length; index++) {
        const element = beach[index];
         this.BeachServices.push(element);
      }

     
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
       
        this.spinner.hide();
      }, 5000);
    }
    
    );
    this.hotelService.getGeneralServices(this.tour.hotelId).subscribe(general=>{
       for (let index = 0; index < general.length; index++) {
        const element = general[index];
         this.GeneralServices.push(element);
      }

      
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
       
        this.spinner.hide();
      }, 5000);
    }
    
    );
    this.hotelService.getForKidsServices(this.tour.hotelId).subscribe(forkids=>{
     
     for (let index = 0; index < forkids.length; index++) {
       const element = forkids[index];
        this.ForKidsServices.push(element);
     }

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


  ifFokKidsNotEmpty():boolean
  {
    return this.ForKidsServices.length!=0;
  }
  ifGenearalNotEmpty():boolean
  {
    return this.GeneralServices.length!=0;
  }
  ifBeachNotEmpty():boolean
  {
    return this.BeachServices.length!=0;
  }
  ifSportNotEmpty():boolean
  {
    return this.SportServices.length!=0;
  }


  ifDefaultImg():boolean{
    if(this.hotel!=null)
    {
      return this.hotel.mainImage.indexOf("default.jpg") !== -1;

    }
  }
  viewGallery()
  {
   
    this.displayBasic=true;
  }
}
