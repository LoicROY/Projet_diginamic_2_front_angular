import { HttpService } from './../service/httpService';
import { ERREUR } from './../string/texteErreur';
import { REGEX } from './../string/regex';
import { TEXTE_HTML } from './../string/texteHTML';
import { AppInjector } from '../app-injector';

export class GeneriqueComponent {
  
    public readonly TEXTE: any = TEXTE_HTML;
    public readonly REGEX: any = REGEX;
    public readonly ERREUR: any = ERREUR;

    public readonly httpService: HttpService;

    constructor() {
        this.httpService = AppInjector.get<HttpService>(HttpService);
    }

}