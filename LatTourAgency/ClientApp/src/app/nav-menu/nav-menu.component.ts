import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApplicationPaths } from '../../api-authorization/api-authorization.constants';



@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  items: MenuItem[];
  faGlobe=faGlobe;
  public isAuthenticated: Observable<boolean>;
  public userName: Observable<string>;
  constructor(private authorizeService: AuthorizeService) { }

  
   
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    this.isAuthenticated = this.authorizeService.isAuthenticated();
    this.userName = this.authorizeService.getUser().pipe(map(u => u && u.name));
    this.items = [
        {
            label:'Home',
            icon:'pi pi-home',
            routerLink: ['/']
      
        },
        {
            label:'Tours',
            icon:'pi pi-fw pi-pencil',
            routerLink: ['/tour']
        },
       
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
       
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
         
        },
        {
          
          label:'Sign In',
          icon:'pi pi-sign-in',
          routerLink: ['/login-page']
      
      },
      {
        
        label:'Sign Up',
        icon:'pi pi-user-plus',
        routerLink: ApplicationPaths.Register
  
    
    }
    ];

    if(this.isAuthenticated)
    {
      this.items.push(
        {
        
          label: String(this.userName) ,
          icon:'pi pi-user',         
          routerLink: ApplicationPaths.Profile
      
        },
        {
        
        label:'Log out',
        icon:'pi pi-sign-out',
        routerLink: ApplicationPaths.LogOut
    
      });
    }
    if(!this.isAuthenticated)
    {
      this.items.push( {
          
        label:'Sign In',
        icon:'pi pi-sign-in',
        routerLink: ['/login-page']

    
    },
    {
      
      label:'Sign Up',
      icon:'pi pi-user-plus',
      routerLink: ApplicationPaths.Register

  
  });
    }

    console.log(this.isAuthenticated);
}


isTourLink
}
