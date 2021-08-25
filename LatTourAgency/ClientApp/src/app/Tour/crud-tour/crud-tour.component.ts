import { Component, OnInit } from '@angular/core';
import { ApiResponse, Hotel, ImageTour, Tour, Town } from 'src/app/Models/model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TourService } from '../tour.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpErrorResponse } from '@angular/common/http';
import { HotelService } from 'src/app/crud-hotel/hotel.service';
import { TownService } from 'src/app/crud-town/town.service';

@Component({
  selector: 'app-crud-tour',
  templateUrl: './crud-tour.component.html',
  styleUrls: ['./crud-tour.component.css'],
  styles: [`
  .outofstock {
      font-weight: 700;
      color: #FF5252;
      text-decoration: line-through;
  }`],
  providers: [ConfirmationService]
})
export class CrudTourComponent implements OnInit {

  tourDialog: boolean;
  submitted: boolean;
  selectedTours: Tour[];
  tour: Tour;
  response: ApiResponse[];



  selectedValue: string = "Add";

  town: Town;
  towns: Town[];
  hotel: Hotel;
  hotels: Hotel[];

  Gallery: ImageTour[] = new Array();
  OldGallery: ImageTour[] = new Array();

  tours: Tour[]
  // = [
  //  new Tour('name',
  //  'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',220.2,
  //  "desc",'short desc',10,"1","Rivne","Piece") ,
  //  new Tour('name1',
  //  'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
  //  ,20.2,"desc1",'short213 desc',5,"2","Odessa","Rand") ,
  //  new Tour('name2',
  //  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
  //  ,220.2,"desc2",'short1231 desc',7,"3","Kyiv","Kyiv") ,
  //  new Tour('name3',
  //  'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  //  220.2,"desc3",'short1111 desc',7,"4","Lviv","Piece") ,


  // ]
  // ;

  disablecheck: boolean = true;

  OldimagePath: any;

  imgURL: any;

  GalleryPath: any;
  galeryURL: any;

  constructor(private tourService: TourService,
    private spinner: NgxSpinnerService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private hotelService: HotelService,
    private townService: TownService) { }

  ngOnInit() {
    this.spinner.show()
    this.GetTowns();
    this.GetHotTours();
    setTimeout(() => {


      this.spinner.hide();
    }, 5000);
  }



  openNew() {
    this.tour = {};
    if (this.towns != undefined)
      this.town = this.towns[0];
    this.disablecheck = true;
    this.selectedValue = "Add";

    this.submitted = false;
    this.tourDialog = true;
  }

  GetTowns() {
    this.townService.getAllTowns().subscribe(towns => {
      this.towns = towns;
      // console.log(this.towns);
      setTimeout(() => {

        this.spinner.hide();
      }, 1000);
    },
      (error: HttpErrorResponse) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

          this.spinner.hide();
        }, 5000);
      }

    );
  }


  GetHotTours() {
    this.tourService.getAllTours().subscribe(data => {
      this.tours = data;
      console.log(data);
      setTimeout(() => {

        this.spinner.hide();
      }, 1000);
    },
      (error: HttpErrorResponse) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

          this.spinner.hide();
        }, 5000);
      }

    );
  }
  deleteSelectedTours() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected tours ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteRangeRequest();

        this.selectedTours = null;
      }
    });
  }

  hideDialog() {
    this.disablecheck = true;
    this.tourDialog = false;
    this.submitted = false;
  }

  editTour(tour: Tour) {
    this.getTour(tour);
    this.disablecheck = false;
    this.tourDialog = true;
  }
  getHotel(hotelid:string){
    this.hotelService.getHotel(hotelid).subscribe(hotel => {

      this.hotel = hotel;
    
      
    },
      (error: HttpErrorResponse) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

          this.spinner.hide();
        }, 5000);
      }

    );
  }
  getTownAndHotel(townid:string){
    this.townService.getTown(townid).subscribe(town => {

      this.town = town;
      if(this.tour.hotelId!=null)
      this.getHotel(this.tour.hotelId);
      
    },
      (error: HttpErrorResponse) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

          this.spinner.hide();
        }, 5000);
      }

    );
  }
  getTour(tour: Tour) {
    this.spinner.show();
    this.tourService.getTour(tour.id).subscribe(tour => {

      this.tour = tour;
      if(this.tour.townId!=null)
      this.getTownAndHotel(this.tour.townId);
      setTimeout(() => {

        this.spinner.hide();

      }, 1000);
    },
      (error: HttpErrorResponse) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

          this.spinner.hide();
        }, 5000);
      }

    );
  }
  deleteRequest(tour: Tour) {
    this.spinner.show();
    this.response = [];



    this.tourService.deleteTour(tour.id).subscribe(data => {

      this.response.push(data);

      this.GetHotTours();

      setTimeout(() => {

        this.spinner.hide();
        this.showMessageResponse();
      }, 1000);
    },
      (error: HttpErrorResponse) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

          this.spinner.hide();
        }, 5000);
      }

    )
  }

  deleteRangeRequest() {
    this.spinner.show();
    this.response = [];



    this.tourService.deleteTOurRange(this.selectedTours).subscribe(data => {

      this.response = data;

      this.GetHotTours();

      setTimeout(() => {

        this.spinner.hide();
        this.showMessageResponse();
      }, 1000);
    },
      (error: HttpErrorResponse) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

          this.spinner.hide();
        }, 5000);
      }

    )
  }

  deleteTour(tour: Tour) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete "' + tour.name + '" ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteRequest(tour);

        this.tour = {};
        //  this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Tour Deleted', life: 3000 });
      }
    });
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.tours.length; i++) {
      if (this.tours[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      id = v.toString(16);
      return id;
    });

  }

  showMessageResponse() {

    this.response.forEach(element => {
      switch (element.status.toString()) {

        case "200": {
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: element.message, life: 3000 });
          break;
        }
        default:
          this.messageService.add({ severity: 'error', summary: 'Error', detail: element.message, life: 3000 });

      }
    });



  }

  CreateTourRequest(tour: Tour) {
    this.spinner.show();
    this.response = [];
    this.tourService.addTour(tour).subscribe(data => {

      this.response.push(data);
      if (this.Gallery.length != 0) {
        this.AddGallery(tour.id);
      }
      this.GetHotTours();
      setTimeout(() => {
        this.spinner.hide();
        //  this.showMessageResponse();
      }, 1000);
    },
      (error: HttpErrorResponse) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

          this.spinner.hide();
        }, 5000);
      })
  }

  saveTour() {
    this.submitted = true;

    if (this.tour.name !== null && this.tour.name !== undefined) {

      if (this.town === undefined) {
        this.town = this.towns[0];
      }
      if (this.hotel == null) {
        this.messageService.add({ severity: 'warn', summary: 'Warning', detail: 'Please select hotel', life: 3000 });


        return;
      }

      this.tour.townId = this.town.id;
      this.tour.town = this.town.name;
      this.tour.hotel = this.hotel.name;
      this.tour.hotelId = this.hotel.id;


      if (this.tour.id) {
        if (this.imgURL == this.OldimagePath) {
          this.tour.mainImage = ""
        }
        else {
          this.tour.mainImage = this.imgURL;

        }

        
         this.UpdateRequest(this.tour);

        this.tourDialog = false;




      }
      else {
        //  this.tour.id = this.createId();
        this.tour.id = this.createId();

        this.tour.mainImage = this.imgURL;


        if (this.tour.mainImage == null || this.tour.mainImage == "") {
          this.tour.mainImage = "default.jpg"
        }


        this.CreateTourRequest(this.tour);


        this.tourDialog = false;

      }


      this.hotel = {};
      this.OldGallery=this.Gallery;
      this.imgURL = this.OldimagePath;
    }
  }

  UpdateGalleryRequest(tourid: string) {


    this.tourService.UpdateGallery(this.Gallery, tourid).subscribe(data => {
      this.response.push(data);
      // setTimeout(() => {
      //   this.spinner.hide();
      //   this.showMessageResponse();
      // }, 1000);

    },
      (error: HttpErrorResponse) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

          this.spinner.hide();
        }, 5000);
      }

    )
  }

  townSelected(event) {
    // console.log(this.town);
    // console.log(event);
    if (this.town != undefined) {


      this.hotelService.getAllHotelsByTownId(this.town.id).subscribe(hotels => {
        this.hotels = hotels;
        // console.log(this.towns);
        // setTimeout(() => {

        //   this.spinner.hide();
        // }, 1000);
      },
        (error: HttpErrorResponse) => {
          setTimeout(() => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

            this.spinner.hide();
          }, 5000);
        }

      );
    }
  }


  preview(event) {

    var reader = new FileReader();

    reader.readAsDataURL(event.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;


    }


  }

  AddGallery(tourid: string) {
    this.tourService.addGallery(this.Gallery, tourid).subscribe(data => {
      this.response.push(data);
    

    },
      (error: HttpErrorResponse) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

          this.spinner.hide();
        }, 5000);
      }

    )
  }

  UpdateRequest(tour: Tour) {
    this.spinner.show();
    this.response = [];
    this.tourService.updateTour(tour).subscribe(res => {
      this.response.push(res);
      if (this.Gallery.length != 0 &&  this.OldGallery==this.Gallery) {
        if(this.selectedValue=="Update")
        {
  
          this.UpdateGalleryRequest(tour.id);
        }
        else{
          this.AddGallery(tour.id);
        }

        
      }
      this.GetHotTours();
      setTimeout(() => {
        this.showMessageResponse();
        this.spinner.hide();
      }, 1000);
    },
      (error: HttpErrorResponse) => {
        setTimeout(() => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error.message, life: 3000 });

          this.spinner.hide();
        }, 5000);
      })
  }

  gallery(event) {

    this.Gallery = [];
    for (let index = 0; index < event.files.length; index++) {

      this.AddImage(event.files[index]);

    }

  }


  AddImage(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (_event) => {
      this.galeryURL = reader.result;



      this.Gallery.push(new ImageTour(this.galeryURL));
    }

  }

}
