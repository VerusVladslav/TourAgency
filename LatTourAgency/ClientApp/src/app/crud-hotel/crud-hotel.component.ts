import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiResponse, Hotel, IFood, IHotelRoom, Town,IHotelServices } from '../Models/model';
import { HotelService } from './hotel.service';
import { NgxSpinnerService } from "ngx-spinner";
import { TownService } from '../crud-town/town.service';

import { HttpErrorResponse } from '@angular/common/http';
import { FoodConstants, HotelRoomConstants, HotelServiceConstants } from '../allConstans';




@Component({
  selector: 'app-crud-hotel',
  templateUrl: './crud-hotel.component.html',
  styleUrls: ['./crud-hotel.component.css'],
  providers:[ConfirmationService]

})
export class CrudHotelComponent implements OnInit {

  hotelDialog: boolean;
  submitted: boolean;
  selectedHotels:Hotel[]=[];

  hotel:  Hotel;
  town:Town ;
  response: ApiResponse[];
 

 
 



  selectedForKids:any[]=[];
  forkids:any[];


  beach:any[];
  selectedBeach:any[]=[];


  general:any[];
  selectedGeneralService:any[]=[];

  entertainment:any[];
  selectedEntertainmentService:any[]=[];


  vipRoomCost:number = 0;
  singleRoomCost:number = 0;
  doubleRoomCost:number  = 0;
  tripleRoomCost:number  = 0;
  extra_BedRoomCost:number  = 0;
  childRoomCost:number  = 0;


  foodUltraCost: number  = 0;
  foodAllInclusiveCost : number  = 0;
  foodFullPassionCost : number  = 0;
  foodDinnerCost : number  = 0;
  foodBreakfastCost : number  = 0;


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
  imagePath: any;
  OldimagePath: any;

  imgURL: any;



  // =[
  //   new Town("Odessa"),
  //   new Town("Rivne"),
  //   new Town("Kyiv")

  // ];

  constructor( private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private hotelService: HotelService,
    private townService: TownService,
    private spinner:NgxSpinnerService,
    ) { }

  ngOnInit() {
    this.getServices();

  
    this.spinner.show()
    
    this.GetAllHotelsRequest();
    setTimeout(() => {
     
      this.spinner.hide();
    }, 5000);
  
  }

  GetAllHotelsRequest(){
    
    
    this.hotelService.getAllHotels().subscribe(data=>{
     
      this.hotels=data;
     
      setTimeout(() => {
      
        this.spinner.hide();
      }, 1000);
      
    this.townService.getAllTowns().subscribe(data=>{
      this.towns=data;
   
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

   

      this.hotelService.addHotelRommsToHotel(this.createRoomlist(),hotel.id).subscribe(data=>{
        
        this.response.push(data);
        this.hotelService.addServicesToHotel(this.createService(),hotel.id).subscribe(data=>{

   
       
     
          this.response.push(data);
          

         
         
          this.hotelService.addFoodToHotel(this.createFoodlist(),hotel.id).subscribe(data=>{
     
            this.response.push(data);

           
           
            this.hotelService.getAllHotels().subscribe(data=>{
     
              this.hotels=data;
   
             
             
              setTimeout(() => {    
                this.spinner.hide();
                this.showMessageResponse();
              }, 2000); 
           
            },
            (error: HttpErrorResponse)=>{
              setTimeout(() => {
                this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
               
                this.spinner.hide();
              }, 5000);
            }
            
            )
         
          },
          (error: HttpErrorResponse)=>{
            setTimeout(() => {
              this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
             
              this.spinner.hide();
            }, 5000);
          }
          
          )
       
        },
        (error: HttpErrorResponse)=>{
          setTimeout(() => {
            this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
           
            this.spinner.hide();
          }, 5000);
        }
        
        )
     
      },
      (error: HttpErrorResponse)=>{
        setTimeout(() => {
          this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
         
          this.spinner.hide();
        }, 5000);
      }
      
      )
      
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
       
        this.spinner.hide();
      }, 5000);
    })
     
  
    
   
  }
  check(event){
    console.log(event);
    console.log(typeof this.selectedGeneralService);
  }
  UpdateHotelRequest(hotel:Hotel){ 
    this.spinner.show(); 
    this.response= [] ;
    this.hotelService.updateHotelRomms(this.createRoomlist(),hotel.id).subscribe(resHotelRooms=>{
      this.response.push(resHotelRooms);

      
      this.hotelService.updateFoods(this.createFoodlist(),hotel.id).subscribe(resFood=>{
      this.response.push(resFood);


      
      this.hotelService.updateServices(this.createService(),hotel.id).subscribe(data=>{
        this.response.push(data);
      this.hotelService.updateHotel(hotel).subscribe(data=>{
      



          this.response.push(data);
        this.hotelService.getAllHotels().subscribe(data=>{
     
        this.hotels=data;
     
       
        setTimeout(() => {
        
          this.spinner.hide();
          this.showMessageResponse();
        }, 2000);
        
     
      },
      (error: HttpErrorResponse)=>{
        setTimeout(() => {
          this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
         
          this.spinner.hide();
        }, 5000);
      }
      
      )
     
      
   
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
       
        this.spinner.hide();
      }, 5000);
    }
    
    )
      });



      },(error: HttpErrorResponse)=>{
        setTimeout(() => {
          this.spinner.hide();
          this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});  
        }, 5000);
      });

    
    },(error: HttpErrorResponse)=>{
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
      this.hotelService.getAllHotels().subscribe(data=>{
     
        this.hotels=data;
       
       
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
      }
      
      )
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
           
              data.forEach(element => {
                this.response.push(element);
            
              }); 
             
              this.hotelService.getAllHotels().subscribe(data=>{
           
                this.hotels=data;
               
               
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
              }
              
              )
           
           
            },
            (error: HttpErrorResponse)=>{
              setTimeout(() => {
                this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
               
                this.spinner.hide();
              }, 5000);
            }
            
            )
        
         
   
     
  
    
   
 }

  openNew() {
    this.hotel =  {};
    
   this.RefreshValue();

    this.submitted = false;
    this.hotelDialog = true;
}


RefreshValue()
{
  this.selectedBeach=[];
  this.selectedForKids=[];
  this.selectedGeneralService=[];
  this.selectedEntertainmentService=[];

  this.vipRoomCost = 0;
  this.singleRoomCost = 0;
  this.doubleRoomCost  = 0;
  this.tripleRoomCost  = 0;
  this.extra_BedRoomCost  = 0;
  this.childRoomCost  = 0;

  this.foodUltraCost  = 0;
  this.foodAllInclusiveCost   = 0;
  this.foodFullPassionCost   = 0;
  this.foodDinnerCost = 0;
  this.foodBreakfastCost   = 0;
}

deleteSelectedHotels() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected hotels ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.DeleteSelectedHotelRequest();
      
       
       
        this.selectedHotels = null;   }
  });
}

hideDialog() {
  this.hotelDialog = false;
  this.submitted = false;
}


setcostHotelRoom(hotelroomlist:IHotelRoom[]){
  hotelroomlist.forEach(element => {
    switch(element.type){
      case HotelRoomConstants.Child:{
        this.childRoomCost=element.costinDoldarsForOneDay;
        break;
      }
      case HotelRoomConstants.Single:{
        this.singleRoomCost=element.costinDoldarsForOneDay;
        break;
      }
      case HotelRoomConstants.Double:{
        this.doubleRoomCost=element.costinDoldarsForOneDay;
        break;
      }
      case HotelRoomConstants.Extra_Bed:{
        this.extra_BedRoomCost=element.costinDoldarsForOneDay;
        break;
      }
      case HotelRoomConstants.Triple:{
        this.tripleRoomCost=element.costinDoldarsForOneDay;
        break;
      }
      case HotelRoomConstants.Vip:{
        this.vipRoomCost=element.costinDoldarsForOneDay;
        break;
      }
    }
    
  });

  
}


setcostFood(foodList:IFood[]){
  foodList.forEach(element => {
    switch(element.type){
      case FoodConstants.Food_AllInclusive:{
        this.foodAllInclusiveCost=element.costinDoldars;
        break;
      }
      case FoodConstants.Food_Breakfast:{
        this.foodBreakfastCost=element.costinDoldars;
        break;
      }
      case FoodConstants.Food_Dinner:{
        this.foodDinnerCost=element.costinDoldars;
        break;
      }
      case FoodConstants.Food_FullPassion:{
        this.extra_BedRoomCost=element.costinDoldars;
        break;
      }
      case FoodConstants.Food_Ultra:{
        this.foodUltraCost=element.costinDoldars;
        break;
      }
     
    }
    
  });

  
}

InitilizeServices(hotelid:string){
  this.hotelService.getBeachServices(hotelid).subscribe(BeachServices=>{
      
    // BeachServices.forEach(element => {
    //   this.selectedBeach.push(element.service)
    // });
    console.log("BeachServices");
    
    console.log(BeachServices);
    
    this.hotelService.getGeneralServices(hotelid).subscribe(General=>{
  
      // BeachServices.forEach(element => {
      //   this.selectedBeach.push(element.service)
      // });
      console.log("General");
    
      console.log(General);
      
      this.hotelService.getForKidsServices(hotelid).subscribe(Forkids=>{
  
        // BeachServices.forEach(element => {
        //   this.selectedBeach.push(element.service)
        // });
        console.log("Forkids");
      
        console.log(Forkids);
        
     
        this.hotelService.getSportServices(hotelid).subscribe(sport=>{
  
          // BeachServices.forEach(element => {
          //   this.selectedBeach.push(element.service)
          // });
          console.log("Sport");
        
          console.log(sport);
          
          setTimeout(() => {  
          
           
            this.hotelDialog = true;
            this.spinner.hide();
             
          }, 5000); 
        
        },(error: HttpErrorResponse)=>{
          setTimeout(() => {
            this.spinner.hide();
            this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});  
          }, 5000);
        });
      },(error: HttpErrorResponse)=>{
        setTimeout(() => {
          this.spinner.hide();
          this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});  
        }, 5000);
      });
    
    },(error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.spinner.hide();
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});  
      }, 5000);
    });
  
  },(error: HttpErrorResponse)=>{
    setTimeout(() => {
      this.spinner.hide();
      this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});  
    }, 5000);
  });
}


InitializeData(hotelId:string){
  this.hotelService.getHotelRomms(hotelId).subscribe(resHotelRooms=>{
   
    this.setcostHotelRoom(resHotelRooms);
    
  
    this.hotelService.getFoods(hotelId).subscribe(resFood=>{
      this.setcostFood(resFood);

      this.InitilizeServices(hotelId);
     
    },(error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.spinner.hide();
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});  
      }, 5000);
    });

  
  },(error: HttpErrorResponse)=>{
    setTimeout(() => {
      this.spinner.hide();
      this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});  
    }, 5000);
  })
}

  editHotel(hotel: Hotel) {
    // console.log("Selected hotel");
    // console.log(this.hotel);
    this.spinner.show(); 
    this.response= [] ;

   

   this.InitializeData(hotel.id);
    setTimeout(() => {  
      this.hotel = {...hotel};
     
      this.hotelDialog = true;
      this.spinner.hide();
      this.showMessageResponse();
      
    }, 5000); 
   
  
   
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


if(this.hotel.name!==null && this.hotel.name!==undefined){
 
   
    if(this.town==undefined)
    {
      this.town=this.towns[0];
    }
    
    this.hotel.town=this.town.name;
    this.hotel.townId=this.town.id;
  
  if (this.hotel.name.trim()) {

      if (this.hotel.id) {

        this.UpdateHotelRequest(this.hotel);             
      //   if(this.checkIfSuccess){
         
      //    this.hotels[this.findIndexById(this.hotel.id)] = this.hotel;   
      //  }

        this.hotelDialog = false;
    
      
      }
      else {
          this.hotel.id=this.createId();
       

          this.hotel.mainImage=this.imgURL;
        
     
        if(this.hotel.mainImage==null||this.hotel.mainImage=="")
        {
          this.hotel.mainImage="default.jpg"
        }
   

        this.CreateHotelRequest(this.hotel);

      
        this.hotelDialog = false;

         }

     
      this.hotel = {};
      this.imgURL=this.OldimagePath;
  }
}
  else {
    this.messageService.add({severity:'error', summary: 'Error', detail: "Name is required", life: 3000});
  }
}


preview(event) {

    var reader = new FileReader();
    this.imagePath = event.files;  
    reader.readAsDataURL(event.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      
    }

  
  }



showMessageResponse(){

  this.response.forEach(element => {
    switch(element.status.toString()){

      case "200" :{
        this.messageService.add({severity:'success', summary: 'Successful', detail: element.message, life: 3000});
        break;       
      }
      case "100" :{
        this.messageService.add({severity:'warn', summary: 'Warning', detail: element.message, life: 3000});
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


getServices() {
  this.forkids= this.hotelService.getArrayForKids();
  this.general=this.hotelService.getArrayGeneral();
  this.beach=this.hotelService.getArrayBleach();
  this.entertainment=this.hotelService.getArrayEntertainment();
 

}

createService(){
 let services: IHotelServices[]=[];

  for (let index = 0; index < this.selectedForKids.length; index++) {
    const element = this.selectedForKids[index];
   services.push(new IHotelServices(HotelServiceConstants.ForKids,element));
    
  }
  for (let index = 0; index < this.selectedGeneralService.length; index++) {
    const element = this.selectedGeneralService[index];
    services.push(new IHotelServices(HotelServiceConstants.General,element));
   
    
  }
  for (let index = 0; index < this.selectedEntertainmentService.length; index++) {
    const element = this.selectedEntertainmentService[index];
    services.push(new IHotelServices(HotelServiceConstants.Sport,element));
   
   
    
  }
  for (let index = 0; index < this.selectedBeach.length; index++) {
    const element = this.selectedBeach[index];
   services.push(new IHotelServices(HotelServiceConstants.Beach,element));
   
    
  }
  
  
 
 
 
  return services;
}


createFoodlist(){
 let foodList:IFood[]=[
  new IFood(FoodConstants.Food_Ultra,this.foodUltraCost),
  new IFood(FoodConstants.Food_AllInclusive,this.foodAllInclusiveCost),
  new IFood(FoodConstants.Food_FullPassion,this.foodFullPassionCost),
  new IFood(FoodConstants.Food_Dinner,this.foodDinnerCost),
  new IFood(FoodConstants.Food_Breakfast,this.foodBreakfastCost),

  ];

 return foodList;
 
  
}


createRoomlist(){
  let roomList:IHotelRoom[]=[
   new IHotelRoom(HotelRoomConstants.Vip,this.vipRoomCost),
   new IHotelRoom(HotelRoomConstants.Single,this.singleRoomCost),
   new IHotelRoom(HotelRoomConstants.Double,this.doubleRoomCost),
   new IHotelRoom(HotelRoomConstants.Triple,this.tripleRoomCost),
   new IHotelRoom(HotelRoomConstants.Extra_Bed,this.extra_BedRoomCost),
   new IHotelRoom(HotelRoomConstants.Child,this.childRoomCost)
 
   ];

  
  
 
  return roomList;
  
   
 }



// GeneralServiceSelected(array:any[])
// {
  
  
//   this.general=this.hotelService.changeGeneralServices(array);
// }

// ForKidsFreeServiceSelected(array:string[]){
 
  
//  this.forkidsPaid= this.hotelService.changeForKiadsServices(array);

// }
// ForKidsPaidServiceSelected(array:string[]){
 
  
//   this.forkidsFree= this.hotelService.changeForKiadsServices(array);
 
//  }

}


