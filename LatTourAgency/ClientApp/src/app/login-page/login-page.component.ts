import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignInModel,ApiResponse } from '../Models/model';
import { MessageService } from 'primeng/api';
import { LoginService } from './login.service';
import { AuthorizeService } from 'src/api-authorization/authorize.service';
import { map } from 'rxjs/operators';

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
    private formBuilder: FormBuilder,
    private loginService:LoginService,
    private authService:AuthorizeService) { }
    

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

    this.loginService.checkLogin( this.model).subscribe(response=>{
      console.log(response);
      if(response.status==200)
      {
        this.loginService.Login(this.model).subscribe(response=>{
         if(response!=null)
         {
           console.log(response);
          this.messageService.add({severity:'success', summary: 'Success ', detail: response.message})
       //   window.localStorage.setItem('token', token);
         // const decoded = jwt_decode(token);
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
