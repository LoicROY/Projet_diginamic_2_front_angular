import { JwtService } from './../../service/jwt.service';
import { Component, OnInit } from '@angular/core';
import { GeneriqueComponent } from 'src/app/generique/generique.component';
import { Absence } from 'src/app/models/absence';



@Component({
    selector: 'app-accueil[soldeCp]',
    templateUrl: './accueil.component.html',
    styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent extends GeneriqueComponent implements OnInit {

    public jeuDeDonnees: Absence[] = [ 
        {
            id:2,
            statut:"INITIALE",
            type:"CongePaye",
            dateDebut: new Date(2021,7,20),
            dateFin: new Date(2021,7,23),
            motif:"vacance"
        } 
    ];

    constructor(public jwtService: JwtService) {
        super();
    }

    ngOnInit(): void {
        console.log(this.jwtService.utilisateurCourant);
    }

}
