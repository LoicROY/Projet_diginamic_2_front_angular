import { JwtService } from './../../service/jwt.service';
import { Component, OnInit } from '@angular/core';
import { GeneriqueComponent } from 'src/app/generique/generique.component';



@Component({
    selector: 'app-accueil',
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
