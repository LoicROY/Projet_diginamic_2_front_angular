import { texteHTML } from './../string/texteHTML';
import { Component } from '@angular/core';

@Component({
  selector: 'app-generique',
  templateUrl: './generique.component.html',
})
export class GeneriqueComponent {
  
    public texte = texteHTML;

}