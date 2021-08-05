
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PasswordModule} from 'primeng/password';
import {CalendarModule} from 'primeng/calendar';
import { RegisterComponent } from './register.component';
import {ButtonModule} from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import {ToastModule} from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PasswordModule, 
    CalendarModule,
    ButtonModule,
    InputMaskModule,
    ReactiveFormsModule,
    ToastModule,
    FormsModule,
    InputTextModule,
    RouterModule
  ],
  declarations:[
    RegisterComponent
    
  ]
})
export class RegisterModule { }
