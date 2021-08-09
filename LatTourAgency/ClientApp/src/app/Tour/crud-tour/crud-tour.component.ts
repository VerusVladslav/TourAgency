import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/Models/model';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-crud-tour',
  templateUrl: './crud-tour.component.html',
  styleUrls: ['./crud-tour.component.css'],
  providers:[ConfirmationService]
})
export class CrudTourComponent implements OnInit {

  tourDialog: boolean;
  submitted: boolean;
  selectedTours:Tour[];

  tour:Tour;

  
tours: Tour[] 
  = [
   new Tour('name',
   'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',5,220.2,
   "desc",'short desc',"1",10,1,10) ,
   new Tour('name1',
   'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
   ,4,20.2,"desc1",'short213 desc',"2",5,1,5) ,
   new Tour('name2',
   'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'
   ,3,220.2,"desc2",'short1231 desc',"3",5,1,2) ,
   new Tour('name3',
   'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
   2,220.2,"desc3",'short1111 desc',"4",20,1,20) ,


  ]
  ;
  constructor( private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
  }

  openNew() {
    this.tour =  {};
    this.submitted = false;
    this.tourDialog = true;
}

deleteSelectedTours() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected tours ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.tours = this.tours.filter(val => !this.selectedTours.includes(val));
          this.selectedTours = null;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Tours Deleted', life: 3000});
      }
  });
}

hideDialog() {
  this.tourDialog = false;
  this.submitted = false;
}

  editTour(tour: Tour) {
    this.tour = {...tour};
    this.tourDialog = true;
}

deleteTour(tour: Tour) {
    this.confirmationService.confirm({
        message: 'Are you sure you want to delete "' + tour.name + '" ?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.tours = this.tours.filter(val => val.id !== tour.id);
            this.tour = {};
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Tour Deleted', life: 3000});
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
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}


saveTour() {
  this.submitted = true;

  if (this.tour.name.trim()) {
      if (this.tour.id) {
          this.tours[this.findIndexById(this.tour.id)] = this.tour;                
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Tour Updated', life: 3000});
      }
      else {
          this.tour.id = this.createId();
          this.tour.mainImage = 'product-placeholder.svg';
          this.tours.push(this.tour);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Tour Created', life: 3000});
      }

      this.tours = [...this.tours];
      this.tourDialog = false;
      this.tour = {};
  }
}


}
