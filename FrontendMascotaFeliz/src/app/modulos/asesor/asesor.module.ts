import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AsignarPlanComponent } from './asignar-plan/asignar-plan.component';
import { CrearAsignarPlanComponent } from './asignar-plan/crear-asignar-plan/crear-asignar-plan.component';
import { EditarAsignarPlanComponent } from './asignar-plan/editar-asignar-plan/editar-asignar-plan.component';
import { BuscarAsignarPlanComponent } from './asignar-plan/buscar-asignar-plan/buscar-asignar-plan.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    AsignarPlanComponent,
    CrearAsignarPlanComponent,
    EditarAsignarPlanComponent,
    BuscarAsignarPlanComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    BuscarUsuarioComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
