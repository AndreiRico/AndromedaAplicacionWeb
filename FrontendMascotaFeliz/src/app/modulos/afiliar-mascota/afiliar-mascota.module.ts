import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AfiliarMascotaRoutingModule } from './afiliar-mascota-routing.module';
import { AfiliarMascotaComponent } from './afiliar-mascota/afiliar-mascota.component';
import { ContactenmeComponent } from './contactenme/contactenme.component';


@NgModule({
  declarations: [
    AfiliarMascotaComponent,
    ContactenmeComponent
  ],
  imports: [
    CommonModule,
    AfiliarMascotaRoutingModule
  ]
})
export class AfiliarMascotaModule { }
