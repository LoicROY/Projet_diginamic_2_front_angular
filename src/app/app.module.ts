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
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    RadioButtonComponent,
    TextAreaComponent,
    SelectComponent,
    LoginComponent,
    ButtonComponent,
    SidebarComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
        config: {
            tokenGetter: () => localStorage.getItem("jwt"),
            allowedDomains: ["localhost:8088"],
            disallowedRoutes: ["http://localhost:8088/login"],
            skipWhenExpired: true
          }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private readonly injector: Injector){
        setAppInjector(injector);
    }
}
