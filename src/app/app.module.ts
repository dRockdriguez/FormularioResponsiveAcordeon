import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './componets/datos-personales/datos-personales.component';
import { DatosBancariosComponent } from './componets/datos-bancarios/datos-bancarios.component';

import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    DatosBancariosComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
