import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { AuthorizeService } from '../../api-authorization/authorize.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApplicationPaths } from '../../api-authorization/api-authorization.constants';
import { LoginService } from '../login-page/login.service';
import { Navigation } from '../allConstans';



@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  items: MenuItem[];
  faGlobe = faGlobe;

  constructor(private loginService: LoginService) { }

  isLogin = false;
  isAdmin = false;
  UserName;
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
   const token = localStorage.getItem('token');
  

    if (token != null) {
      this.UserName = this.loginService.getUserName();
      this.isLogin = true;
      this.isAdmin = this.loginService.isAdmin();
    } else {
      this.isLogin = false;
      this.isAdmin = false;

    }
    this.loginService.statusLogin.subscribe(
      (data) => {
      

        this.isAdmin = this.loginService.isAdmin();
        this.isLogin = data;
        if (this.isLogin)
          this.UserName = this.loginService.getUserName();
       this.InitNavMenu();
      }
    );

   
  this.InitNavMenu();
    // this.items = [];
    // this.items = [
    //   {
    //     label: 'Home',
    //     icon: 'pi pi-home',
    //     routerLink: Navigation.Home

    //   },
    //   {
    //     label: 'Tours',
    //     icon: 'pi pi-fw pi-calendar',
    //     routerLink: Navigation.TourList
    //   },


    //   {
    //     label: 'Filter',
    //     icon: 'pi pi-fw pi-filter',
    //     routerLink: Navigation.Filter
    //   }


    // ];

    // if (this.isAdmin) {
    //   this.items.push(
    //     {
    //       label: 'CRUD',
    //       icon: 'pi pi-fw pi-pencil',
    //       items: [
    //         { label: 'Tours', icon: 'pi pi-fw pi-pencil', routerLink: Navigation.CrudTour },
    //         { label: 'Hotels', icon: 'pi pi-fw pi-pencil', routerLink: Navigation.CrudHotel },
    //         { label: 'Towns', icon: 'pi pi-fw pi-pencil', routerLink: Navigation.CrudTown },

    //       ]
    //     });
    // }


    // if (this.isLogin) {
    //   this.items.push(
    //     {

    //       label: String(this.UserName),
    //       icon: 'pi pi-user'


    //     },
    //     {

    //       label: 'Log out',
    //       icon: 'pi pi-sign-out',
    //       routerLink: Navigation.Logout

    //     });
    // }



    // if (!this.isLogin) {
    //   this.items.push({

    //     label: 'Sign In',
    //     icon: 'pi pi-sign-in',
    //     routerLink: Navigation.Login


    //   },
    //     {

    //       label: 'Sign Up',
    //       icon: 'pi pi-user-plus',
    //       routerLink: Navigation.Register


    //     });
    // }

  }

  InitNavMenu() {
   
    this.items = [];
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: Navigation.Home

      },
      {
        label: 'Tours',
        icon: 'pi pi-fw pi-calendar',
        routerLink: Navigation.TourList
      },


      {
        label: 'Filter',
        icon: 'pi pi-fw pi-filter',
        routerLink: Navigation.Filter
      }


    ];

    if (this.isAdmin) {
      this.items.push(
        {
          label: 'CRUD',
          icon: 'pi pi-fw pi-pencil',
          items: [
            { label: 'Tours', icon: 'pi pi-fw pi-pencil', routerLink: Navigation.CrudTour },
            { label: 'Hotels', icon: 'pi pi-fw pi-pencil', routerLink: Navigation.CrudHotel },
            { label: 'Towns', icon: 'pi pi-fw pi-pencil', routerLink: Navigation.CrudTown },

          ]
        });
    }


    if (this.isLogin) {
      this.items.push(
        {

          label: String(this.UserName),
          icon: 'pi pi-user'


        },
        {

          label: 'Log out',
          icon: 'pi pi-sign-out',
          routerLink: Navigation.Logout

        });
    }



    if (!this.isLogin) {
      this.items.push({

        label: 'Sign In',
        icon: 'pi pi-sign-in',
        routerLink: Navigation.Login


      },
        {

          label: 'Sign Up',
          icon: 'pi pi-user-plus',
          routerLink: Navigation.Register


        });
    }
  }

}
