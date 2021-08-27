import { Router } from '@angular/router';
import { GeneriqueComponent } from './../../generique/generique.component';
import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faCalendarCheck, faClipboardCheck, faHistory, faHome, faLocationArrow, faTasks, faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent extends GeneriqueComponent implements OnInit {

    public pages: any[] = [
        { icon: faHome, href: this.URL.ACCUEIL, label: "Accueil", show: true },
        { icon: faLocationArrow, href: this.URL.DEMANDE_ABSENCE, label: "Demande d'absence", show: true },
        { icon: faClipboardCheck, href: this.URL.GERER_DEMANDE, label: "Gérer mes demandes", show: true },
        { icon: faTasks, href: this.URL.VISUALISER_DEMANDE, label: "Visualiser les demandes", show: this.isManager() },
        { icon: faHistory, href: this.URL.HISTORIQUE, label: "Historique", show: true },
        { icon: faCalendarCheck, href: this.URL.JOURS_NON_TRAVAILLES, label: "Jours non travaillés", show: true },
        { icon: faCalendarAlt, href: this.URL.GERER_PLANNING, label: "Gérer le planning", show: this.isManager() },
        { icon: faUserSlash, href: null, label: "Deconnexion", show: true }
    ]

    constructor(private router: Router, private jwtService: JwtService) {
        super();
    }

    ngOnInit(): void {
    }

    public isLast(i: any): boolean {
        return i === this.pages[this.pages.length - 1];
    }

    public isManager(): boolean {
        return this.jwtService.utilisateurCourant.type === "Manager";
    }

    public logout(): void {
        sessionStorage.removeItem('jwt');
        this.router.navigateByUrl(this.URL.LOGIN);
    }
}
