
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthProviderService } from './auth-provider.service';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authProvider: AuthProviderService) {
    }

    canActivate(): boolean {
        if (this.authProvider.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }

        return false;
    }
}