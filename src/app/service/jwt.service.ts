import { Salarie } from './../models/salarie';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class JwtService extends JwtHelperService {

    /**
     * L'utilisateur connecté
     */
    public utilisateurCourant: Salarie = this.decodeToken(sessionStorage.getItem('jwt')!).user;

    constructor() {
        super();
    }

}
