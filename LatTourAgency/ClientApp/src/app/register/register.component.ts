import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse, SignUpModel } from '../Models/model';
import { RegisterService } from './register.service';
import { MessageService } from 'primeng/api';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpErrorResponse } from '@angular/common/http';
import { AuthorizeService } from 'src/api-authorization/authorize.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private spinner :NgxSpinnerService,
    private authService:AuthorizeService) {


  }
  currentYear: string = new Date().getFullYear().toString();
  model: SignUpModel;
  registerForm: FormGroup;
  result:ApiResponse ;
 register(){
    this.spinner.show();
  
    this.registerService.SignUp(this.model).subscribe(data => {
      this.result=data;
      if(this.result.status==200){
        setTimeout(() => {
          
          this.spinner.hide();
          this.messageService.add({severity:'success', summary: 'Success ', detail: this.result.message})
        }, 1000);
        setTimeout(() => {
          //this.authService.signIn()
       // this.router.navigate(['/']);
        },2000);
      }
         else{
          this.spinner.hide();

           this.messageService.add({severity:'error', summary: 'Error ', detail: this.result.message})

        }
    },
    (error: HttpErrorResponse)=>{
      setTimeout(() => {
        this.messageService.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
       
        this.spinner.hide();
      }, 5000);
    });
   
    //
     
    

  }

  onSubmit() {
    
    
      if (this.registerForm.invalid) {
          this.messageService.add({severity:'error', summary: 'Error ', detail: "Invalid form"})

            return;
       }
    
       if (!this.isEmail()) {
        this.messageService.add({severity:'error', summary: 'Error ', detail: "Email is invalid"})

         return;
       }
      this.model = {
        Email: this.registerForm.controls.Email.value,
        Phone: this.registerForm.controls.Phone.value,
        SurName: this.registerForm.controls.SurName.value,
        UserName: this.registerForm.controls.UserName.value,
        Password:  this.registerForm.controls.Password.value,
        Birth: this.registerForm.controls.Birth.value

      };
      console.log(this.model);
      this.register();
      
   
}
ngOnInit() {
 
  //this.registerService.SignUp
  this.registerForm = this.formBuilder.group({
    Email: ['', Validators.required],
    Password: ['', Validators.required],
    UserName: ['', Validators.required],
    Phone: ['', Validators.required],
    SurName: ['', Validators.required],
    Birth: ['', Validators.required],

  });


  
}



isEmail(): boolean {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(this.registerForm.controls.Email.value).toLowerCase());
}
}
