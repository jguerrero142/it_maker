import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

/* Modulos de librerias*/
import { AngularMaterialModule } from './angular-material.module';
import { NgxSpinnerModule } from "ngx-spinner";
import { AuthModule } from '@auth0/auth0-angular';

/* Importancion de la NGRX */
import { StoreModule } from '@ngrx/store';
import { appStore } from './shared/store/appStore';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    AuthModule.forRoot({
      domain: 'soportjulian.us.auth0.com',
      clientId: 'M1CcOPSOJreboPvRW8kwzPUs4AWQxPaS'
    }),
    StoreModule.forRoot(appStore),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
