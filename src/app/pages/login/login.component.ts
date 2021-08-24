import { GeneriqueComponent } from './../../generique/generique.component';
import { Component, Input, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/userLogin';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends GeneriqueComponent implements OnInit {

    /**
     * loggs du user
     */
    public userLogin: UserLogin = {}

    /**
     * active la sauvegarde du mdp (disabled atm)
     */
    public seSouvenirDuMDP: boolean = false;

    /**
     * stock les erreurs des champs
     */
    @Input()
    public erreur: { email?: string, password?: string } = {};


    constructor(private router: Router) {
        super();
    }

    ngOnInit(): void {
    }

    /**
     * Desactive le bouton si les champs requis ne sont pas remplis ou si il y a des erreurs
     */
    public loginDisabled(): boolean {
        return !this.userLogin.email || !this.userLogin.password || this.erreur.email != undefined || this.erreur.password != undefined;
    }

    /**
     * Appel au back pour le jwt
     */
    public login(): void {
        this.httpService.login(this.userLogin).subscribe(
            jwt => { 
                sessionStorage.setItem('jwt', jwt);
                this.router.navigateByUrl(this.URL.PAGES);
            },
            erreur => console.log(erreur)
        );
    }

}
