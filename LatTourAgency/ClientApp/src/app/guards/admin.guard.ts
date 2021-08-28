
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Navigation } from '../allConstans';
import { LoginService } from '../login-page/login.service';


@Injectable({
    providedIn: 'root'
})

export class AdminGuard implements CanActivate {

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
        if (this.authService.isAdmin()) {
            return true;
        } else {
            this.router.navigate([Navigation.Home]);
            this.messageService.add({severity:'error', summary: 'Error ', detail: "You don't have access"})

            return false;
        }
    }
}