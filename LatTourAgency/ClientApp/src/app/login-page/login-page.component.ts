import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInModel,ApiResponse } from '../Models/model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  model:SignInModel;
  loginForm: FormGroup;
  result:ApiResponse;
  constructor(private messageService: MessageService,
    private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
     
  
    });
  }
  onSubmit(){
    try {
      if (this.loginForm.invalid ) {
            return;
       }
      this.model = {
        Email: this.loginForm.controls.Email.value,
        Password: this.loginForm.controls.Password.value,
      };

    
 
    } catch(error) {
        this.messageService.add({severity:'error', summary: 'Error ', detail: error})
      }
  }
}
