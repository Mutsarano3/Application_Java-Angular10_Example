import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InscriptionService } from './inscription.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private userServices: InscriptionService,private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.userServices.isAuth) {
            return true;
        } else{
            this.router.navigate(['/login']);

        }
    }

}