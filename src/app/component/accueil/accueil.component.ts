import { Component, OnInit } from '@angular/core';
import { global } from 'src/app/string/ConstGlobal';
import {HttpService} from "../../service/HttpService";



@Component({
  selector: 'app-acceuil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AcceuilComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit(): void {

    this.http.getSalarieCp()
      .subscribe(
        soldeCp => {
          this.soldeCp= soldeCp;
          this.resteCP= global.MAX_CONGE_PAYE-soldeCp;
        },
        ()=>{console.log("resulta null")}
      )
    this.http.getSalarieRTT()
      .subscribe(
        soldeRTT=>{
          this.soldeRTT= soldeRTT;
          this.resteRTT= global.MAX_RTT-soldeRTT;
        },
        ()=>{console.log("resulta null")}
      )

  }
  soldeCp:number =0;
  soldeRTT:number=0;
  resteRTT:number=0;
  resteCP:number=0;



}
