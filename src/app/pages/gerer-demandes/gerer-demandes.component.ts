import { Component, OnInit } from '@angular/core';
import { Salarie } from 'src/app/models/salarie';
import { Alert, ALERTS } from "../../models/alert";
import { JwtService } from "../../service/jwt.service";

@Component({
    selector: 'app-gerer-demandes',
    templateUrl: './gerer-demandes.component.html',
    styleUrls: ['./gerer-demandes.component.scss']
})
export class GererDemandesComponent implements OnInit {

    alerts: Alert[] = Array.from(ALERTS);

    salarie: Salarie;

    constructor(public jwtService: JwtService) {
        this.salarie = jwtService.getUser();
    }

    ngOnInit(): void {
    }

}
