import { Component } from '@angular/core';
import {  ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls:['app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private primengConfig: PrimeNGConfig//,
   // private translateService: TranslateService
    ) {}

  ngOnInit() {
   // this.translateService.setDefaultLang('en');
    this.primengConfig.ripple = true;

    this.primengConfig.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',
      //translations
  });
  }
  translate(lang: string) {
  //  this.translateService.use(lang);
   // this.translateService.get('primeng').subscribe(res => this.primengConfig.setTranslation(res));
}
}
