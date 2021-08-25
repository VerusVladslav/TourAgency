import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from "primeng/dynamicdialog";
import { Tour } from "src/app/Models/model";
import { TourService } from "../tour.service";
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-TourFilteredDemo',
  templateUrl: './TourFilteredDemo.component.html',
  styleUrls: ['./TourFilteredDemo.component.css']
})
export class TourFilteredDemoComponent implements OnInit {
  tours: Tour[];
            
  constructor(private tourService: TourService,
    private router: Router, public ref: DynamicDialogRef, private spinner:NgxSpinnerService,
    private messageService: MessageService,
     public config: DynamicDialogConfig) { }

  ngOnInit() {
  //  console.log(this.tourService.getFilter());

      this.tourService.getFilteredTourList().subscribe(tours => {
        this.tours = tours
        if(tours.length==0)
        {
        this.messageService.add( {severity:'warn', summary:'Warning', detail:'Not found'},);
          
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
 
  selectTour(tour: Tour) {
      this.ref.close(tour);
     this.router.navigate(['/tour/',  tour.id]);
  }
 

}
