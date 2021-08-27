import { Option } from './../../models/option';
import { Absence } from './../../models/absence';
import { Component, OnInit } from '@angular/core';
import { GeneriqueComponent } from 'src/app/generique/generique.component';

@Component({
    selector: 'app-demande-absence',
    templateUrl: './demande-absence.component.html',
    styleUrls: ['./demande-absence.component.scss']
})
export class DemandeAbsenceComponent extends GeneriqueComponent implements OnInit {

    /**
     * Absence demandée par le user
     */
    public absence: Absence = {
        statut: 'EN_ATTENTE_VALIDATION',
        type: 'CongePaye'
    }

    public typeOptions: Option[]= [
        { value: 'RttEmploye', text: 'RttEmploye' },
        { value: 'CongePaye', text: 'CongePaye' },
        { value: 'CongeSansSolde', text: 'CongeSansSolde' }
    ]

    /**
     * Message de réussite
     */
    public succesMessage?: string;

    /**
     * Message d'echec
     */
    public erreurMessage?: string;

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

    /**
     * Envoi de l'absence au back pour validation par le batch de nuit puis par le manager
     */
    public demandeAbsence(): void {
        this.httpService.postAbsence(this.absence).subscribe(
            () => this.succesMessage = this.SUCCES.DEMANDE_ABSENCE,
            (data) => this.erreurMessage = data.error.message
        )
    }

}
