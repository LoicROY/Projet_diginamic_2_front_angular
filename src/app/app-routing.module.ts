import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URL } from './string/url';
import { AuthentificationGuard } from './guards/authentification.guard';
import { LoginGuard } from './guards/login.guard';
import { PagesComponent } from './pages/pages.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DemandeAbsenceComponent } from './pages/demande-absence/demande-absence.component';

const routes: Routes = [
    { 
        path: URL.PAGES,
        component: PagesComponent,
        canActivate: [AuthentificationGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: URL.ACCUEIL },
            { path: URL.ACCUEIL, component: AccueilComponent },
            { path: URL.DEMANDE_ABSENCE, component: DemandeAbsenceComponent }
        ]
    },
    { path: URL.LOGIN, canActivate: [LoginGuard], component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: URL.PAGES }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
