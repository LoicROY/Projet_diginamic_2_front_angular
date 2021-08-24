import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { URL } from './string/url';
import { AuthentificationGuard } from './guards/authentification.guard';
import { LoginGuard } from './guards/login.guard';
import { PagesComponent } from './pages/pages.component';
import { AccueilComponent } from './pages/accueil/accueil.component';

const routes: Routes = [
    { 
        path: URL.PAGES,
        component: PagesComponent,
        canActivate: [AuthentificationGuard],
        children: [
            { path: '', pathMatch: 'full', redirectTo: URL.ACCUEIL },
            { path: 'accueil', component: AccueilComponent }
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
