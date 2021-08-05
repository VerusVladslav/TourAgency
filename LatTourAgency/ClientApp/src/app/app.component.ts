import { Component } from '@angular/core';
import {  ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService,ConfirmationService],
  styleUrls:['app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}
