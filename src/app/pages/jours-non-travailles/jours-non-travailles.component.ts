import { Component, OnInit } from '@angular/core';
import { GeneriqueComponent } from 'src/app/generique/generique.component';

@Component({
  selector: 'app-jours-non-travailles',
  templateUrl: './jours-non-travailles.component.html',
  styleUrls: ['./jours-non-travailles.component.scss']
})
export class JoursNonTravaillesComponent extends GeneriqueComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
