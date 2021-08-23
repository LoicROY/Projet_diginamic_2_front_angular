import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { URL } from '../string/url';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        // si nécéssité de rediriger vers la page de login
        return sessionStorage.getItem('jwt') != null || this.router.navigateByUrl(URL.LOGIN);

        // si pas de nécéssité de rediriger vers la page de login
        // return sessionStorage.getItem('jwt') != null;
    }

}
