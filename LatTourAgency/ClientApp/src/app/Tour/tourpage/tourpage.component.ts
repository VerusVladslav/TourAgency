import { Component, OnInit } from '@angular/core';
import { Tour, Town } from 'src/app/Models/model';

@Component({
  selector: 'app-tourpage',
  templateUrl: './tourpage.component.html',
  styleUrls: ['./tourpage.component.css']
})
export class TourpageComponent implements OnInit {

  // tour: Tour = new Tour('name',
  // 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',5,220.2,
  // "desc",'short desc',"1",10)

  images: any[]=[

  
    
    {
      "previewImageSrc": "https://www.mywanderlust.pl/wp-content/uploads/2018/08/travel-to-lviv-ukraine-21.jpg",
      "thumbnailImageSrc": "https://www.mywanderlust.pl/wp-content/uploads/2018/08/travel-to-lviv-ukraine-21.jpg",
      "alt": "Description for Image 1",
      "title": "Title 1"
  },
  {
      "previewImageSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "thumbnailImageSrc": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      "alt": "Description for Image 2",
      "title": "Title 2"
  },
  {
      "previewImageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_E2SpiEYClIESG0zGhT7jGiNzv6GCA2rNFA&usqp=CAU",
      "thumbnailImageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_E2SpiEYClIESG0zGhT7jGiNzv6GCA2rNFA&usqp=CAU",
      "alt": "Description for Image 3",
      "title": "Title 3"
  },
  {
      "previewImageSrc": "https://wantsee.world/wp-content/uploads/2020/05/Lviv-Ukraine.-Travel.jpg",
      "thumbnailImageSrc": "https://wantsee.world/wp-content/uploads/2020/05/Lviv-Ukraine.-Travel.jpg",
      "alt": "Description for Image 4",
      "title": "Title 4"
  },
  {
      "previewImageSrc": "https://www.visaukraine.com/wp-content/uploads/sites/21/2021/01/lviv-entry-requirements-1280x720.jpg",
      "thumbnailImageSrc": "https://www.visaukraine.com/wp-content/uploads/sites/21/2021/01/lviv-entry-requirements-1280x720.jpg",
      "alt": "Description for Image 5",
      "title": "Title 5"
  },
  {
      "previewImageSrc": "https://cdn.turkishairlines.com/m/501a497e3aa110e5/original/Travel-Guide-of-Lviv-via-Turkish-Airlines.jpg",
      "thumbnailImageSrc": "https://cdn.turkishairlines.com/m/501a497e3aa110e5/original/Travel-Guide-of-Lviv-via-Turkish-Airlines.jpg",
      "alt": "Description for Image 6",
      "title": "Title 6"
  },
  
 
    ];
  

    responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

displayBasic: boolean;


  // towns: Town[]=[
  //  new Town ('Rivne'),
  //  new Town ('Kyiv'),
  //  new Town ('Lviv'),
  //  new Town ('Odessa'),
  //  new Town ('Kharkiv'),
  //  new Town ('Lyck'),
  //  new Town ('Zhytomyr')

  // ];

  constructor() { }

  ngOnInit() {
  }

 
}
