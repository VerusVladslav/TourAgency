import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import {ToastModule} from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PasswordModule, 
    ButtonModule,
    ReactiveFormsModule,
    ToastModule,
    FormsModule,
    InputTextModule,
    RouterModule

  ],
  declarations: [LoginPageComponent]
})
export class LoginPageModule { }
