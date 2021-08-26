import { Injector, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { setAppInjector } from './app-injector';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './shared/formulaireComponents/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { RadioButtonComponent } from './shared/formulaireComponents/radio-button/radio-button.component';
import { TextAreaComponent } from './shared/formulaireComponents/text-area/text-area.component';
import { SelectComponent } from './shared/formulaireComponents/select/select.component';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './pages/login/login.component';
import { ButtonComponent } from './shared/formulaireComponents/button/button.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { PagesComponent } from './pages/pages.component';
import { CompteurComponent } from './pages/accueil/compteur/compteur.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { DemandeAbsenceComponent } from './pages/demande-absence/demande-absence.component';
import { GererDemandesComponent } from './pages/gerer-demandes/gerer-demandes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InputComponent,
    RadioButtonComponent,
    TextAreaComponent,
    SelectComponent,
    LoginComponent,
    ButtonComponent,
    SidebarComponent,
    PagesComponent,
    AccueilComponent,
    CalendarComponent,
    CompteurComponent,
    DemandeAbsenceComponent,
    GererDemandesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
        config: {
            tokenGetter: () => sessionStorage.getItem("jwt"),
            allowedDomains: ["localhost:8888"],
            disallowedRoutes: ["http://localhost:8888/login"],
            skipWhenExpired: true
          }
    }),
    NgbModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private readonly injector: Injector){
        setAppInjector(injector);
    }
}
