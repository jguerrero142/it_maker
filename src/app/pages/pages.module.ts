import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { CardsComponent } from './cards/cards.component';
import { FormCreateComponent } from './form-create/form-create.component';
import { ReactiveFormsModule } from '@angular/forms';


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
    ReactiveFormsModule
  ]
})
export class PagesModule { }
