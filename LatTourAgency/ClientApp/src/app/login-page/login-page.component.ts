import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SignInModel,ApiResponse } from '../Models/model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  User:SignInModel;
  loginForm: FormGroup;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.add({severity:'success', summary: 'Success ', detail: 'Success'})

  }
  onSubmit(){}
}
