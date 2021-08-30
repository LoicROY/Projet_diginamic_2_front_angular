import { Departement } from './../models/departement';
import { UserSignUp } from 'src/app/models/userSignUp';
import { Absence } from 'src/app/models/absence';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserLogin } from "../models/userLogin";
import { Salarie } from '../models/salarie';

@Injectable({
    providedIn: 'root',
})
export class HttpService {

    /**
     * Url du backend
     */
    private backEndUrl: string = "http://localhost:8088/";

    constructor(private http: HttpClient) { }

    /**
     * Methode d'authentification
     */
    public login(userLogin: UserLogin): Observable<any> {
        const requestOptions: Object = {
            responseType: 'text'
        };
        return this.http.post<string>(this.backEndUrl + "login", userLogin, requestOptions);
    }

    /**
     * Methode de création d'un salarie ou manager ou admin
     */
    public signup(userSignUp: UserSignUp): Observable<any> {
        return this.http.post<string>(this.backEndUrl + userSignUp.type + '/create', userSignUp);
    }

    /**
     * Enregistrement d'une absence
     */
    public postAbsence(absence: Absence): Observable<Absence> {
        return this.http.post<Absence>(this.backEndUrl + absence.type, absence);
    }

    /**
     * Récupère la liste des salariés en base
     */
    public getSalaries(): Observable<Salarie[]> {
        return this.http.get<Salarie[]>(this.backEndUrl + "Salarie");
    }

    /**
     * Modification d'une absence en base
     */
    public putAbsence(absence: Absence): Observable<Absence> {
        return this.http.put<Absence>(this.backEndUrl + absence.type, absence);
    }

    /**
     * Récupère la liste des departements en base
     */
    public getAllDepartements(): Observable<Departement[]> {
        return this.http.get<Departement[]>(this.backEndUrl + 'Departement/getAll');
    }

    /**
     * Récupère la liste des departements en base
     */
    public getAllManagers(): Observable<Salarie[]> {
        return this.http.get<Salarie[]>(this.backEndUrl + 'Manager/getAll');
    }

    /**
     * Récupère la liste des rtt employeurs en base
     */
    public getAllRttEmployeur(): Observable<Absence[]> {
        return this.http.get<Absence[]>(this.backEndUrl + 'RttEmployeur');
    }

    /**
     * Récupère la liste des jours fériés en base
     */
    public getAllJoursFeries(): Observable<Absence[]> {
        return this.http.get<Absence[]>(this.backEndUrl + 'JourFerie');
    }

}
