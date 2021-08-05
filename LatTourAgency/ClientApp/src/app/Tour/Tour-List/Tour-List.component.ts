import { Component, OnInit } from '@angular/core';
import { Tour } from 'src/app/Models/model';
import { TourService } from '../tour.service';
import {SelectItem} from '../../Models/model';
@Component({
  selector: 'app-Tour-List',
  templateUrl: './Tour-List.component.html',
  styleUrls: ['./Tour-List.component.css']
})
export class TourListComponent implements OnInit {

  constructor(private tourService:TourService) { }
  Tours: Tour[] 
  = [
   new Tour('name','https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',5,220.2,"desc",'short desc') ,
   new Tour('name1','https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',4,20.2,"desc1",'short213 desc') ,
   new Tour('name2','https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',3,220.2,"desc2",'short1231 desc') ,
   new Tour('name3','https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',2,220.2,"desc3",'short1111 desc') ,


  ]
  ;
    sortOptions: SelectItem[];

    sortOrder: number;

    sortField: string;
  ngOnInit() {
    this.tourService.getAllTours().subscribe(data=>{
     // this.Tours=data;
      console.log(this.Tours);
    });
 
    
    this.sortOptions = [
      {label: 'Price High to Low', value: '!costindoldars'},
      {label: 'Price Low to High', value: 'costindoldars'}
  ];
     

  }



  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
