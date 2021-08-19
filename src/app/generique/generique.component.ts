import { texteHTML } from './../string/texteHTML';
import { Component } from '@angular/core';
import { global } from '../string/ConstGlobal';


@Component({
  selector: 'app-generique',
  templateUrl: './generique.component.html',
})
export class GeneriqueComponent {

    public texte = texteHTML;
  public global = global;

}
