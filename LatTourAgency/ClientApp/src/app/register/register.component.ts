import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse, SignUpModel } from '../Models/model';
import { RegisterService } from './register.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private messageService: MessageService) {


  }

  model: SignUpModel;
  registerForm: FormGroup;
  result:ApiResponse;

  onSubmit() {
    try {
      if (this.registerForm.invalid ) {
            return;
       }
      this.model = {
        Email: this.registerForm.controls.Email.value,
        Phone: this.registerForm.controls.Phone.value,
        SurName: this.registerForm.controls.SurName.value,
        UserName: this.registerForm.controls.UserName.value,
        Password: this.registerForm.controls.Password.value,
        Birth: this.registerForm.controls.Birth.value

      };

      this.registerService.SignUp(this.model).subscribe(data => {
        this.result=data;
        if(this.result.status==200){
        this.messageService.add({severity:'success', summary: 'Success ', detail: this.result.message})

        }
           else{
          this.messageService.add({severity:'error', summary: 'Error ', detail: this.result.message})
  
          }
      });
 
    } catch(error) {
        this.messageService.add({severity:'error', summary: 'Error ', detail: error})
      }

   
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
