import { Component, OnInit } from '@angular/core';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-benefits',
 
  
  
 templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css'],
 // template :
})
export class BenefitsComponent implements OnInit {
  faBus=faBus;
  faSmile=faSmile;
  faGlobeAfrica=faGlobeAfrica;
  constructor() { }

  ngOnInit() {
  }

}
