import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserLogin } from "../model/userLogin";

@Injectable({
    providedIn: 'root',
})
export class HttpService {

    /**
     * Url du backend
     */
    private backEndUrl: string = "http://localhost:8088/"

    constructor(private http: HttpClient) { }

    /**
     * Methode d'authentification
     */
    public login(userLogin: UserLogin): Observable<any> {
        const requestOptions: Object = {
            responseType: 'text'
          }
        return this.http.post<string>(this.backEndUrl + "login", userLogin, requestOptions);
    }

}