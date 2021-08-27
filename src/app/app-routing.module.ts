import { JoursNonTravaillesComponent } from './pages/jours-non-travailles/jours-non-travailles.component';
import { GererDemandesComponent } from './pages/gerer-demandes/gerer-demandes.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URL } from './string/url';
import { AuthentificationGuard } from './guards/authentification.guard';
import { LoginGuard } from './guards/login.guard';
import { PagesComponent } from './pages/pages.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DemandeAbsenceComponent } from './pages/demande-absence/demande-absence.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
    { 
        path: URL.PAGES,
        component: PagesComponent,
        canActivate: [AuthentificationGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: URL.ACCUEIL },
            { path: URL.ACCUEIL, component: AccueilComponent },
            { path: URL.DEMANDE_ABSENCE, component: DemandeAbsenceComponent },
            { path: URL.GERER_DEMANDE, component: GererDemandesComponent },
            // { path: URL.VISUALISER_DEMANDE, component: VisualiserDemandeAbsenceComponent },
            // { path: URL.HISTORIQUE, component: HistoriqueComponent },
            { path: URL.JOURS_NON_TRAVAILLES, component: JoursNonTravaillesComponent },
            // { path: URL.GERER_PLANNING, component: GererPlanningComponent },
        ]
    },
    { path: URL.LOGIN, canActivate: [LoginGuard], component: LoginComponent },
    { path: URL.SIGN_UP, canActivate: [LoginGuard], component: SignUpComponent },
    { path: '', pathMatch: 'full', redirectTo: URL.PAGES }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
