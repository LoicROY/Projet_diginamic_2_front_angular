import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeneriqueComponent } from 'src/app/generique/generique.component';
import { Absence } from 'src/app/models/absence';

@Component({
    selector: 'app-absence-obligatoire',
    templateUrl: './absence-obligatoire.component.html',
    styleUrls: ['./absence-obligatoire.component.scss']
})
export class AbsenceObligatoireComponent extends GeneriqueComponent implements OnInit {

    /**
     * Absence ajoutée par l'admin
     */
    public absence: Absence = {
        statut: "INITIALE",
        type: "JourFerie"
    }

    /**
       * Message de réussite
       */
    public succesMessage?: string;

    /**
     * Message d'echec
     */
    public erreurMessage?: string;

    @Output()
    public ErrorChange: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    public SuccessChange: EventEmitter<string> = new EventEmitter<string>();

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

    /**
       * Envoi de du jour non travaill" au back pour validation par le batch de nuit
       */
    public ajoutJourNonTravaille(): void {
        // reset des messages erreur et success
        this.succesMessage = undefined;
        this.SuccessChange.emit(this.succesMessage);
        this.erreurMessage = undefined;
        this.ErrorChange.emit(this.erreurMessage);

        this.httpService.postAbsence(this.absence).subscribe(
            () => {
                this.succesMessage = this.SUCCES.AJOUT_NON_TRAVAILLE;
                this.SuccessChange.emit(this.succesMessage);
            },
            (data) => {
                this.erreurMessage = data.error.message;
                this.ErrorChange.emit(this.erreurMessage);
            }
        )
    }

}
