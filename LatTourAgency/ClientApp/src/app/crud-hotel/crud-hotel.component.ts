import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Hotel } from '../Models/model';


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

  
  hotels: Hotel[] 
  =[
   new Hotel("Piece",
   "https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg",5,"Rivne","1"),
   new Hotel("Kyiv",
   "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/96/95/96959_v6.jpeg",5,"Kyiv","2"),
   new Hotel("Rivne Hotel",
   "https://cdn.galaxy.tf/thumb/sizeW1920/uploads/2s/cms_image/001/597/742/1597742695_5f3b9e671b2f4-thumb.jpg",4,"Rivne","3"),
   new Hotel("Rivne",
   "https://www.fairmont-ru.com/assets/0/104/1785/1790/5059/5067/ba5c8a82-6dd5-4635-8ac8-f29dc63c9e9a.jpg",3,"Rivne","4"),
  ];


  constructor( private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    console.log(this.selectedHotels);
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
          this.hotels = this.hotels.filter(val => !this.selectedHotels.includes(val));
          this.selectedHotels = null;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Hotels Deleted', life: 3000});
      }
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
            this.hotels = this.hotels.filter(val => val.id !== hotel.id);
            this.hotel = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Hotel Deleted', life: 3000});
        }
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
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}


saveHotel() {
  this.submitted = true;

  if (this.hotel.name.trim()) {
      if (this.hotel.id) {
          this.hotels[this.findIndexById(this.hotel.id)] = this.hotel;                
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Hotel Updated', life: 3000});
      }
      else {
          this.hotel.id = this.createId();
          this.hotel.mainImage = 'product-placeholder.svg';
          this.hotels.push(this.hotel);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Hotel Created', life: 3000});
      }

      this.hotels = [...this.hotels];
      this.hotelDialog = false;
      this.hotel = {};
  }
}
}
