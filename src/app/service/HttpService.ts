import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root',
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getSalarieCp(): Observable<number>{
    return this.http.get<number>("http://localhost:8888/salarie/getSoldeCp");
  }
  getSalarieRTT(): Observable<number>{
    return this.http.get<number>("http://localhost:8888/salarie/getSoldeRtt");
  }
}
