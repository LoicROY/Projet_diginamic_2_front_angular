import { Option } from './../../models/option';
import { UserSignUpError } from './../../models/userSignUp';
import { GeneriqueComponent } from './../../generique/generique.component';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUp } from 'src/app/models/userSignUp';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends GeneriqueComponent implements OnInit {

    /**
     * loggs du user
     */
    public user: UserSignUp = {
        type: 'Salarie'
    }

    /**
     * stock les erreurs des champs
     */
    @Input()
    public erreur: UserSignUpError = {};

    /**
     * Les différents type de user possible
     */
    public typeOptions: Option[] = [
        { value: 'Salarie', text: 'Salarie' },
        { value: 'Manager', text: 'Manager' },
        { value: 'Administrateur', text: 'Administrateur' }
    ];

    /**
     * stock les departements présent en base
     */
    public departementsOptions: Option[] = [];


    constructor(private router: Router) {
        super();
    }

    ngOnInit(): void {
        this.getAllDepartements();
    }

    /**
     * Récupère la liste des departements en base
     */
    public getAllDepartements(): void {
        this.httpService.getAllDepartements().subscribe(
            departements => departements.forEach(data => this.departementsOptions.push(
                { value: data, text: data.libelle }
            )),
            erreur => console.log(erreur)
        );
    }

    /**
     * Desactive le bouton si les champs requis ne sont pas remplis ou si il y a des erreurs
     */
    public signupDisabled(): boolean {
        return !this.user.dateArrivee || // elements required
            !this.user.dateDeNaissance ||
            !this.user.email ||
            !this.user.departement ||
            !this.user.nom ||
            !this.user.password ||
            !this.user.prenom ||
            // erreurs possible
            this.erreur.dateArrivee != undefined ||
            this.erreur.dateDeNaissance != undefined ||
            this.erreur.email != undefined ||
            this.erreur.departement != undefined ||
            this.erreur.nom != undefined ||
            this.erreur.password != undefined ||
            this.erreur.prenom != undefined
    }
    /**
     * dateArrivee?:string,
    dateDeNaissance?: string,
    email?: string,
    departement?: Departement,
    nom?: string,
    password?: string,
    prenom?: string,
     */

    /**
     * Appel au back pour créer un salarie ou manager ou admin
     */
    public signup(): void {
        this.httpService.signup(this.user).subscribe(
            () => this.router.navigateByUrl(this.URL.PAGES),
            erreur => console.log(erreur)
        );
    }
}
