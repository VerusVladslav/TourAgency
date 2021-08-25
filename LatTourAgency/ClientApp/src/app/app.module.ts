import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';


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
import { BenefitsComponent } from './home/benefits/benefits.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import {AccordionModule} from 'primeng/accordion'; 
import {MenubarModule} from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import { RegisterModule } from './register/register.module';
import { TourListComponent } from './Tour/Tour-List/Tour-List.component';
import { CrudTourComponent } from './Tour/crud-tour/crud-tour.component';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import { CrudHotelComponent } from './crud-hotel/crud-hotel.component';
import { CrudTownComponent } from './crud-town/crud-town.component';
import { NgxSpinnerModule } from "ngx-spinner";
import {FileUploadModule} from 'primeng/fileupload';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import { TourpageComponent } from './Tour/tourpage/tourpage.component';
import {GalleriaModule} from 'primeng/galleria';
import {MultiSelectModule} from 'primeng/multiselect';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FilterTourComponent } from './Tour/filter-tour/filter-tour.component';
import {SliderModule} from 'primeng/slider';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { TourFilteredDemoComponent } from './Tour/TourFilteredDemo/TourFilteredDemo.component';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [		
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,
    BenefitsComponent,
    TourListComponent,
    CrudTourComponent,
      CrudHotelComponent,
      CrudTownComponent,
      TourpageComponent,
      FilterTourComponent,
      TourFilteredDemoComponent
   ],
  imports: [
   // BrowserModule,//.withServerTransition({ appId: 'ng-cli-universal' }),
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MessagesModule,
    FormsModule,
    ApiAuthorizationModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    CalendarModule,
    DropdownModule,
    BrowserAnimationsModule,
    AccordionModule, 
    CardModule,
    FontAwesomeModule,
    RatingModule,
    MenuModule,
    SliderModule,
    DataViewModule,
    MenubarModule,
    InputMaskModule,
    ReactiveFormsModule,
    ToastModule,
    DynamicDialogModule,
    RegisterModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    InputNumberModule,
    NgxSpinnerModule,
    FileUploadModule,
    KeyFilterModule,
    MessageModule,
    GalleriaModule,
    MultiSelectModule,
    RadioButtonModule,
    TabViewModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
