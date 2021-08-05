import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-exaple',
  templateUrl: './card-exaple.component.html',
  styleUrls: ['./card-exaple.component.css']
})
export class CardExapleComponent implements OnInit {
  rating: number = 4;

  ngOnInit() {
  }

}
