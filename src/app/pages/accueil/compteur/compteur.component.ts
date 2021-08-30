import { GeneriqueComponent } from './../../../generique/generique.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-compteur[soldeCP][soldeRTT]',
    templateUrl: './compteur.component.html',
    styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent extends GeneriqueComponent implements OnInit {

    @Input()
    public soldeCP!: number;

    public resteCP!: number;

    @Input()
    public soldeRTT!: number;

    public resteRTT!: number;

    constructor() {
        super();
    }

    ngOnInit(): void {
        this.resteCP = this.global.MAX_CONGE_PAYE - this.soldeCP;
        this.resteRTT = this.global.MAX_RTT - this.soldeRTT;
    }

}
