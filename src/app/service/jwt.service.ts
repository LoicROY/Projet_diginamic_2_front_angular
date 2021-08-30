import { Salarie } from './../models/salarie';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class JwtService extends JwtHelperService {

    constructor() {
        super();
    }

    /**
     * Retourne l'utilisateur connecté
     */
    public getUser(): Salarie {
        return this.decodeToken(sessionStorage.getItem('jwt')!).user;
    }

}
