import { Component } from '@angular/core';
import {absence} from "./models/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-diginamic';

  public jeuDeDonnees:(absence)[] = [{id:2,statut:"INITIALE",type:"cp",dateDebut: new Date(2021,9,20),dateFin: new Date(2021,9,23),motif:"vacance"} ];

}

