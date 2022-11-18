import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AsignarPlanComponent } from './asignar-plan/asignar-plan.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    AsignarPlanComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
