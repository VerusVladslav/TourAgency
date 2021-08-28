import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Navigation } from '../allConstans';
import { LoginService } from '../login-page/login.service';

@Component({
  selector: 'app-Logout',
  templateUrl: './Logout.component.html',
  styleUrls: ['./Logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService:LoginService,
    private messageService: MessageService,
    private router:Router) { }

  ngOnInit() {
  
      this.authService.Logout();
      this.messageService.add({severity:'success', summary: 'Success ', detail: 'Logout Success'})
      this.router.navigate([Navigation.Home]);
     // console.log(this.authService.statusLogin.);
   
    
  }

}
