import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { LoginPageModule } from './login-page/login-page.module';
import {CardModule} from 'primeng/card';
import {MenuModule} from 'primeng/menu';
import {RatingModule} from 'primeng/rating';
import {DataViewModule} from 'primeng/dataview';
import { CardExapleComponent } from './home/card-exaple/card-exaple.component';
import { BenefitsComponent } from './home/benefits/benefits.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion'; 

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    FooterComponent,
    CardExapleComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,//.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    AppRoutingModule,
  FontAwesomeModule,
  LoginPageModule,
  CardModule,
  RatingModule,
  MenuModule,
  DataViewModule,
  ButtonModule,
  InputTextModule,
  FormsModule,
  DropdownModule,
  BrowserAnimationsModule,
  AccordionModule,


  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
