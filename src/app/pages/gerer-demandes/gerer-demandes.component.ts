import { Component, Input, OnInit } from '@angular/core';
import { Absence } from 'src/app/models/absence';
import { Salarie } from 'src/app/models/salarie';
import {Alert, ALERTS} from "../../models/alert";




@Component({
  selector: 'app-gerer-demandes',
  templateUrl: './gerer-demandes.component.html',
  styleUrls: ['./gerer-demandes.component.scss']
})
export class GererDemandesComponent implements OnInit {

  alerts: Alert[] = Array.from(ALERTS);

  absences:Absence[]=[
    {
      statut: 'INITIALE',
      type: 'CongePaye',
      dateDebut: "25/8/2021",
      dateFin: "27/8/2021",
      motif: "vacances",
    },
    {
      statut: 'EN_ATTENTE_VALIDATION',
      type: 'RttEmploye',
      dateDebut: "10/10/2021",
      dateFin: "12/10/2021",
      motif: "vacances",
    },
    {
      statut: 'REJETEE',
      type: 'CongeSansSolde',
      dateDebut: "10/6/2021",
      dateFin: "11/6/2021",
      motif: "enterment",

    }

  ]

  salarie: Salarie={
    absences: this.absences,
    authorities: [],
    dateArrivee: new Date( 2020,2,26),
    dateDeNaissance: new Date( 1990,2,26),
    departement: {id:1,libelle:"toto"},
    email: "string",
    nom: "Martin",
    password: "password",
    prenom: "Dany",
    type: 'Salarie'
  }

  salaries: Salarie[] = [
    this.salarie
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
