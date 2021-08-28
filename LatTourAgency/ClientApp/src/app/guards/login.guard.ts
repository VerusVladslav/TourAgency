import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LoginService } from '../login-page/login.service';
import { MessageService } from 'primeng/api';
import { Navigation } from '../allConstans';

@Injectable({
    
    providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {

    constructor(
        private authService: LoginService,
        private router: Router,
        private messageService: MessageService, 
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.check(state.url);
    }

    check(url: string): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate([Navigation.Login]);
            // tslint:disable-next-line: quotemark
            this.messageService.add({severity:'error', summary: 'Error ', detail: "You don't login"})

            return false;
        }
    }
}