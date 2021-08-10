import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ApiResponse, Town } from '../Models/model';
import { TownService } from './town.service';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-crud-town',
  templateUrl: './crud-town.component.html',
  styleUrls: ['./crud-town.component.css']
})
export class CrudTownComponent implements OnInit {

  constructor( private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private townService: TownService,
    private spinner:NgxSpinnerService,
    private router:Router
    ) { }

   
  townDialog: boolean;
  submitted: boolean;
  selectedTowns:Town[];
    response: ApiResponse[];
  town:  Town;

  towns: Town[]
  // =[
  //   new Town("Rivne","1"),
  //   new Town("Kyiv","2"),
  //   new Town("Lviv","3"),
  //   new Town("Odessa","4")

  // ]
  ;
  ngOnInit() {
    this.spinner.show()
    
        this.GetAllTownsRequest();
        setTimeout(() => {
         
          this.spinner.hide();
        }, 5000);
    
  }


  
  openNew() {
    this.town =  {};
    this.submitted = false;
    this.townDialog = true;
}

GetAllTownsRequest(){
 

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


CreateTownRequest(town:Town){ 
  this.spinner.show();
  this.response=[];
  this.townService.addTown(town).subscribe(data=>{
    
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

UpdateTownRequest(town:Town){ 
  this.spinner.show(); 
  this.response= [] ;
  this.townService.updateTown(town).subscribe(data=>{
    
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

DeleteSelectedTownRequest(){ 
  this.spinner.show();
  this.response=[];
  this.townService.deleteTownRange(this.selectedTowns).subscribe(data=>{   
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

DeleteTownRequest(id:string){ 
  this.spinner.show();
  this.response=[];
  this.townService.deleteTown(id).subscribe(data=>{   
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




deleteSelectedTowns() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected towns ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          
          this.DeleteSelectedTownRequest();
      
          if(this.checkIfSuccess)
          {
            this.towns = this.towns.filter(val => !this.selectedTowns.includes(val));
          }
         
          this.selectedTowns = null;
       }
  });
}

hideDialog() {
  this.townDialog = false;
  this.submitted = false;
}

  editTown(town: Town) {
    this.town = {...town};
    this.townDialog = true;
}

deleteTown(town: Town) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete "' + town.name + '" ?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.DeleteTownRequest(town.id);
          if(this.checkIfSuccess){
            this.towns = this.towns.filter(val => val.id !== town.id); 
          }
       
       
            this.town = {};
        }
    });
}

findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.towns.length; i++) {
      if (this.towns[i].id === id) {
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


saveTown() {
  this.submitted = true;

  if (this.town.name.trim()) {
      if (this.town.id) {
        this.UpdateTownRequest(this.town);             
        if(this.checkIfSuccess){
         
         this.towns[this.findIndexById(this.town.id)] = this.town;   
       }
      
        this.townDialog = false;
          
     }
      else {
          this.town.id = this.createId();
          this.CreateTownRequest(this.town);
          if(this.checkIfSuccess){

            this.towns.push(this.town);
          }
          this.townDialog = false;

         
         
   }
   
      this.town = {};
  }
}
}
