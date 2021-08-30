import { Component, OnInit } from '@angular/core';
import { GeneriqueComponent } from 'src/app/generique/generique.component';
import { Absence } from 'src/app/models/absence';
import { Alert, ALERTS } from 'src/app/models/alert';
import { Salarie } from 'src/app/models/salarie';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
    selector: 'app-valider-demande',
    templateUrl: './valider-demande.component.html',
    styleUrls: ['./valider-demande.component.scss']
})
export class ValiderDemandeComponent extends GeneriqueComponent implements OnInit {

    alerts: Alert[] = Array.from(ALERTS);

    salaries?: Salarie[];


    constructor(public jwtService: JwtService) {
        super();
    }

    ngOnInit(): void {
        this.getSalaries();
    }

    public getSalaries(): void {
        this.httpService.getSalaries().subscribe(
            (salaries) => this.salaries = salaries,
            (erreur) => console.log(erreur)
        )
    }

    public valider(absence: Absence): void {
        absence.statut = 'VALIDEE';
        this.httpService.putAbsence(absence).subscribe(
            () => console.log("ok validée"),
            () => console.log("not ok")
        )
    }

    public refuser(absence: Absence): void {
        absence.statut = 'REJETEE';
        this.httpService.putAbsence(absence).subscribe(
            () => console.log("ok validée"),
            () => console.log("not ok")
        )

    }

}
