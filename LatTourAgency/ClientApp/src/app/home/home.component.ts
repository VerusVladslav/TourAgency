import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:[  './home.component.css']
})

export class HomeComponent implements OnInit {
   
    constructor( private spinner:NgxSpinnerService){}
 images=[];
 

 ngOnInit() {
       this.spinner.show();
       this.images=[
        "../../assets/Image/image1.jpg",
        "../../assets/Image/image2.jpg",
        "../../assets/Image/image3.jpg",
        "../../assets/Image/image4.jpg",
        "../../assets/Image/image5.jpg",
        "../../assets/Image/image6.jpg"
      ];
       
        setTimeout(() => {
         
          this.spinner.hide();
        }, 750);
 }
    
}
