import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliarMascotaRoutingModule } from './afiliar-mascota-routing.module';
import { AfiliarMascotaComponent } from './afiliar-mascota/afiliar-mascota.component';
import { ContactenmeComponent } from './contactenme/contactenme.component';
import { CrearMascotaComponent } from './afiliar-mascota/crear-mascota/crear-mascota.component';
import { BuscarMascotaComponent } from './afiliar-mascota/buscar-mascota/buscar-mascota.component';


@NgModule({
  declarations: [
    AfiliarMascotaComponent,
    ContactenmeComponent,
    CrearMascotaComponent,
    BuscarMascotaComponent
  ],
  imports: [
    CommonModule,
    AfiliarMascotaRoutingModule
  ]
})
export class AfiliarMascotaModule { }
