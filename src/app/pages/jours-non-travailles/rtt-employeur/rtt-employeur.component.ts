import { Component, Input, OnInit } from '@angular/core';
import { GeneriqueComponent } from 'src/app/generique/generique.component';
import { Absence } from 'src/app/models/absence';

@Component({
  selector: 'app-rtt-employeur',
  templateUrl: './rtt-employeur.component.html',
  styleUrls: ['./rtt-employeur.component.scss']
})
export class RttEmployeurComponent extends GeneriqueComponent implements OnInit {

  public annee?:string

  public mois?:string

  public nomMois:string[] = ['Janvier','Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ]

  @Input()
  public required: boolean = true;

  public absences:Absence[] = [
    {
      statut: "VALIDEE",
      type: "RttEmployeur",
      date: "2021-10-8",
      libelle: "RTT employeur 1"

    },
    {
      statut: "VALIDEE",
      type: "RttEmployeur",
      date: "2021-11-3",
      libelle: "RTT employeur 2"

    },
    {
      statut: "VALIDEE",
      type: "RttEmployeur",
      date: "2021-12-4",
      libelle: "RTT employeur 3"

    }
  ]

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
