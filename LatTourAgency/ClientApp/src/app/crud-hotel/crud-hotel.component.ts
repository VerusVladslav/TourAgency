import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiResponse, Hotel, Town } from '../Models/model';
import { HotelService } from './hotel.service';
import { NgxSpinnerService } from "ngx-spinner";
import { TownService } from '../crud-town/town.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-crud-hotel',
  templateUrl: './crud-hotel.component.html',
  styleUrls: ['./crud-hotel.component.css'],
  providers:[ConfirmationService]

})
export class CrudHotelComponent implements OnInit {

  hotelDialog: boolean;
  submitted: boolean;
  selectedHotels:Hotel[];

  hotel:  Hotel;
  response: ApiResponse[];
  public imagePath;
  imageURl:any;
  hotels: Hotel[] 
  // =[
  //  new Hotel("Piece",
  //  "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",5,"Rivne","1"),
  //  new Hotel("Kyiv",
  //  "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg",5,"Kyiv","2"),
  //  new Hotel("Rivne Hotel",
  //  "https://cdn.galaxy.tf/thumb/sizeW1920/uploads/2s/cms_image/001/597/742/1597742695_5f3b9e671b2f4-thumb.jpg",4,"Rivne","3"),
  //  new Hotel("Rivne",
  //  "https://www.fairmont-ru.com/assets/0/104/1785/1790/5059/5067/ba5c8a82-6dd5-4635-8ac8-f29dc63c9e9a.jpg",3,"Rivne","4"),
  // ];
  towns: Town[];

  constructor( private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private hotelService: HotelService,
    private townService: TownService,
    private spinner:NgxSpinnerService,
    ) { }

  ngOnInit() {
    this.spinner.show()
    
    this.GetAllHotelsRequest();
    setTimeout(() => {
     
      this.spinner.hide();
    }, 5000);
  }

  GetAllHotelsRequest(){
    
    
    this.hotelService.getAllHotels().subscribe(data=>{
      this.hotels=data;
      console.log(data);
      // setTimeout(() => {
      
      //   this.spinner.hide();
      // }, 1000);
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
       
        this.spinner.hide();
      }, 5000);
    }
    
    )


    this.townService.getAllTowns().subscribe(data=>{
      this.towns=data;
     console.log(data);
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
    
    )
  }
  
  
  CreateHotelRequest(hotel:Hotel){ 
    this.spinner.show();
    this.response=[];
    this.hotelService.addHotel(hotel).subscribe(data=>{
      
      this.response.push(data);
      setTimeout(() => {    
        this.spinner.hide();
        this.showMessageResponse();
      }, 1000); 
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
       
        this.spinner.hide();
      }, 5000);
    })
     
  
    
   
  }
  
  UpdateHotelRequest(hotel:Hotel){ 
    this.spinner.show(); 
    this.response= [] ;
    this.hotelService.updateHotel(hotel).subscribe(data=>{
      
      this.response.push(data);
      setTimeout(() => {  
  
        this.spinner.hide();
        this.showMessageResponse();
        
      }, 1000); 
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.spinner.hide();
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});  
      }, 5000);
    })
  }
  
  DeleteSelectedHotelRequest(){ 
    this.spinner.show();
    this.response=[];
    this.hotelService.deleteHotelRange(this.selectedHotels).subscribe(data=>{   
      this.response=data;
      setTimeout(() => {    
        this.spinner.hide();
        this.showMessageResponse();
      }, 1000); 
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.spinner.hide();
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
       
      }, 5000);
    })
     
  
    
   
  }
  
  DeleteHotelRequest(id:string){ 
    this.spinner.show();
    this.response=[];
    this.hotelService.deleteHotel(id).subscribe(data=>{   
      this.response.push(data);
      console.log( this.response);
  
      setTimeout(() => {    
        this.spinner.hide();
        this.showMessageResponse();
      }, 1000); 
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.spinner.hide();
        console.log(error);
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
       
      }, 5000);
    })
     
  
    
   
  }

  openNew() {
    this.hotel =  {};
    this.submitted = false;
    this.hotelDialog = true;
}

deleteSelectedHotels() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected hotels ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.DeleteSelectedHotelRequest();
      
        if(this.checkIfSuccess)
        {
          this.hotels = this.hotels.filter(val => !this.selectedHotels.includes(val));
        }
       
        this.selectedHotels = null;   }
  });
}

hideDialog() {
  this.hotelDialog = false;
  this.submitted = false;
}

  editHotel(hotel: Hotel) {
    this.hotel = {...hotel};
    this.hotelDialog = true;
}

deleteHotel(hotel: Hotel) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete "' + hotel.name + '" ?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.DeleteHotelRequest(hotel.id);
          if(this.checkIfSuccess){
            this.hotels = this.hotels.filter(val => val.id !== hotel.id); 
          }
       
       
            this.hotel = {};  }
    });
}

findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.hotels.length; i++) {
      if (this.hotels[i].id === id) {
          index = i;
          break;
      }
  }

  return index;
}

createId(): string {
  let id = '';
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
   id= v.toString(16);
   return id;
  });
 
}


saveHotel() {
  this.submitted = true;

  if (this.hotel.name.trim()) {
      if (this.hotel.id) {
        this.UpdateHotelRequest(this.hotel);             
        if(this.checkIfSuccess){
         
         this.hotels[this.findIndexById(this.hotel.id)] = this.hotel;   
       }
      
        this.hotelDialog = false;
            }
      else {
        this.hotel.id = this.createId();
        this.CreateHotelRequest(this.hotel);
        if(this.checkIfSuccess){

          this.hotels.push(this.hotel);
        }
        this.hotelDialog = false;

         }

     
      this.hotel = {};
  }
}


preview(files) {
  if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    this.messageService.add({severity:'error', summary: 'Error', detail: "Only images are supported.", life: 3000});

    
    return;
  }

  var reader = new FileReader();
  this.imagePath = files;
  reader.readAsDataURL(files[0]);
  reader.onload = (_event) => {
    this.imageURl = reader.result;
  
  }
  this.hotel.mainImage=this.imageURl;
}

showMessageResponse(){

  this.response.forEach(element => {
    switch(element.status.toString()){

      case "200" :{
        this.messageService.add({severity:'success', summary: 'Successful', detail: element.message, life: 3000});
        break;       
      }
      default :
      this.messageService.add({severity:'error', summary: 'Error', detail: element.message, life: 3000});
     
  }});
   
  
   
}
  

checkIfSuccess(): boolean{
  this.response.forEach(element => {
    if(element.status==200)
    {
      return true;
    }
  })
  return false;
}
}
