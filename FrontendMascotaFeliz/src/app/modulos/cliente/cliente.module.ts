import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { MascotasComponent } from './mascotas/mascotas.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';


@NgModule({
  declarations: [
    MascotasComponent,
    CrearMascotaComponent,
    BuscarMascotaComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule
  ]
})
export class ClienteModule { }
