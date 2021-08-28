import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInModel,ApiResponse, LoginToken } from '../Models/model';
import { MessageService } from 'primeng/api';
import { LoginService } from './login.service';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { Navigation } from '../allConstans';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  token:LoginToken;
  model:SignInModel;
  loginForm: FormGroup;
  result:ApiResponse;
  constructor(private messageService: MessageService,
    private formBuilder: FormBuilder,
    private loginService:LoginService,
    private router :Router,
    private spinner:NgxSpinnerService,
    ) { }
    

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
     
  
    });
  }
  onSubmit(){
    this.spinner.show();
    try {
      if (this.loginForm.invalid ) {
    this.spinner.hide();
            
        return;
       }
      this.model = {
        Email: this.loginForm.controls.Email.value,
        Password: this.loginForm.controls.Password.value,
      };

    this.loginService.checkLogin( this.model).subscribe(response=>{
      console.log(response);
      if(response.status==200)
      {
        this.loginService.Login(this.model).subscribe(response=>{
         if(response!=null)
         {
          window.localStorage.setItem('token', response.token);
          this.token = jwt_decode(response.token);
          this.loginService.statusLogin.emit(true);
          console.log(this.loginService.statusLogin);
          this.spinner.hide();
        
          this.router.navigate([Navigation.Home]);
          this.messageService.add({severity:'success', summary: 'Success ', detail: response.message})
       
         }
      
        });
      }
      else{
        this.messageService.add({severity:'error', summary: response.status.toString(), detail: response.message})

      }
    })
 
    } catch(error) {
        this.messageService.add({severity:'error', summary: 'Error ', detail: error})
      }
  }
}
