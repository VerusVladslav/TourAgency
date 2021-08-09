import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Town } from '../Models/model';
import { TownService } from './town.service';
@Component({
  selector: 'app-crud-town',
  templateUrl: './crud-town.component.html',
  styleUrls: ['./crud-town.component.css']
})
export class CrudTownComponent implements OnInit {

  constructor( private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private townService: TownService
    ) { }

    spinner:boolean;
  townDialog: boolean;
  submitted: boolean;
  selectedTowns:Town[];

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
    this.spinner=true;
    this.townService.getAllTowns().subscribe(data=>{
      this.towns=data;
      console.log(data);
    //  this.spinner=false;
    })
  }


  
  openNew() {
    this.town =  {};
    this.submitted = false;
    this.townDialog = true;
}
deleteSelectedTowns() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected towns ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.towns = this.towns.filter(val => !this.selectedTowns.includes(val));
          this.selectedTowns = null;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Towns Deleted', life: 3000});
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
            this.towns = this.towns.filter(val => val.id !== town.id);
            this.town = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Town Deleted', life: 3000});
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
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}


saveTown() {
  this.submitted = true;

  if (this.town.name.trim()) {
      if (this.town.id) {
          this.towns[this.findIndexById(this.town.id)] = this.town;                
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Town Updated', life: 3000});
      }
      else {
          this.town.id = this.createId();
         
          this.towns.push(this.town);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Town Created', life: 3000});
      }

      this.towns = [...this.towns];
      this.townDialog = false;
      this.town = {};
  }
}
}
