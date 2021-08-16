//Todo lo que viene de @angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Todo lo que viene de 3ros


//todo lo que el dev creó
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ColectoresComponent } from './colectores/colectores.component';
import { RefaccionesComponent } from './refacciones/refacciones.component';
import { SvComponent } from './sv/sv.component';
import { IncendioComponent } from './incendio/incendio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    QuienesSomosComponent,
    ColectoresComponent,
    RefaccionesComponent,
    SvComponent,
    IncendioComponent,
    ContactoComponent,
    HomeComponent
  ],
  exports: [
    QuienesSomosComponent,
    ColectoresComponent,
    RefaccionesComponent,
    SvComponent,
    IncendioComponent,
    ContactoComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
