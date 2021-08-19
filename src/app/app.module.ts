import { HttpService } from './service/httpService';
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

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    RadioButtonComponent,
    TextAreaComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private readonly injector: Injector){
        setAppInjector(injector);
    }
}
