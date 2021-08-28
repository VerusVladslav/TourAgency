import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { LoginComponent } from 'src/api-authorization/login/login.component';
import { CrudHotelComponent } from './crud-hotel/crud-hotel.component';
import { CrudTownComponent } from './crud-town/crud-town.component';
import { AdminGuard } from './guards/admin.guard';
import { LoggedInGuard } from './guards/login.guard';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutComponent } from './Logout/Logout.component';
import { Page404Component } from './page404/page404.component';
import { RegisterComponent } from './register/register.component';
import { CrudTourComponent } from './Tour/crud-tour/crud-tour.component';
import { FilterTourComponent } from './Tour/filter-tour/filter-tour.component';

import { TourListComponent } from './Tour/Tour-List/Tour-List.component';
import { TourpageComponent } from './Tour/tourpage/tourpage.component';

const routes: Routes = [

    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'login-page', component: LoginPageComponent, pathMatch: 'full' },

   // { path: 'counter', component: CounterComponent },
   // { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
    {path:'crud-tour', canActivate: [AdminGuard], component:CrudTourComponent,pathMatch:'full'},
    {path:'crud-hotel', canActivate: [AdminGuard],component:CrudHotelComponent,pathMatch:'full'},
    {path:'crud-town', canActivate: [AdminGuard],component:CrudTownComponent,pathMatch:'full'},
    {path: 'tour-list',component:TourListComponent,pathMatch:'full'},
    {path:'filter-tour',component:FilterTourComponent,pathMatch:'full'},
    {path:'tour/:id',component:TourpageComponent},
    {path:'logout',component:LogoutComponent,pathMatch:'full'},

    {path: '**' ,  component: Page404Component }



];

@NgModule({
    providers: [MessageService,ConfirmationService],
    imports: [RouterModule.forRoot(routes,{ relativeLinkResolution: 'legacy',  scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }