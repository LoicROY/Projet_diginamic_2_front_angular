import { Option } from './../../../models/option';
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

  public nomMois: string[] = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre'
    ];
  
  public moisOptions: Option[] = [];
  
  public anneeOptions: Option[] = [
      { value: '2019', text: '2019' },
      { value: '2020', text: '2020' },
      { value: '2021', text: '2021' },
      { value: '2022', text: '2022' }
    ];


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
    this.nomMois.forEach(mois => this.moisOptions.push(
        { value: mois, text: mois }
    ))
  }

  ngOnInit(): void {
  }

}
