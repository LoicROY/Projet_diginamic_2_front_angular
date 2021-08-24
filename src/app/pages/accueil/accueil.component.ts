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

     constructor(public jwtService: JwtService) {
        super();
    }

    ngOnInit(): void {
    }

}
