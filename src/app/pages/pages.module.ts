import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { CardsComponent } from './cards/cards.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    FormCreateComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ]
})
export class PagesModule { }
