import { Component, OnInit } from '@angular/core';
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
    type:"JourFerie"
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  /**
     * Envoi de du jour non travaill" au back pour validation par le batch de nuit
     */
  public ajoutJourNonTravaille(): void {
    // this.httpService.postAbsence(this.absence).subscribe(
    //   () => this.succesMessage = this.SUCCES.DEMANDE_ABSENCE,
    //   (data) => this.erreurMessage = data.error.message
    // )
  }

}
