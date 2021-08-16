import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColectoresComponent } from './ui/colectores/colectores.component';
import { ContactoComponent } from './ui/contacto/contacto.component';

import { HomeComponent } from './ui/home/home.component';
import { IncendioComponent } from './ui/incendio/incendio.component';
import { QuienesSomosComponent } from './ui/quienes-somos/quienes-somos.component';
import { RefaccionesComponent } from './ui/refacciones/refacciones.component';
import { SvComponent } from './ui/sv/sv.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'quienessomos',
    component: QuienesSomosComponent
  },
  {
    path: 'colectores',
    component: ColectoresComponent
  },
  {
    path: 'refacciones',
    component: RefaccionesComponent
  },
  {
    path: 'servicios',
    component: SvComponent
  },
  {
    path: 'incendios',
    component: IncendioComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
