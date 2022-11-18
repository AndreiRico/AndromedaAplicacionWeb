import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PlanesComponent } from './planes/planes.component';
import { ProductosServiciosComponent } from './productos-servicios/productos-servicios.component';
import { CambioContrasenaComponent } from './cambio-contrasena/cambio-contrasena.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { CrearProductoServicioComponent } from './productos-servicios/crear-producto-servicio/crear-producto-servicio.component';
import { EditarProductoServicioComponent } from './productos-servicios/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productos-servicios/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { BuscarProductoServicioComponent } from './productos-servicios/buscar-producto-servicio/buscar-producto-servicio.component';
import { CrearCambioContrasenaComponent } from './cambio-contrasena/crear-cambio-contrasena/crear-cambio-contrasena.component';
import { EditarCambioContrasenaComponent } from './cambio-contrasena/editar-cambio-contrasena/editar-cambio-contrasena.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    PlanesComponent,
    ProductosServiciosComponent,
    CambioContrasenaComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    BuscarPlanComponent,
    CrearProductoServicioComponent,
    EditarProductoServicioComponent,
    EliminarProductoServicioComponent,
    BuscarProductoServicioComponent,
    CrearCambioContrasenaComponent,
    EditarCambioContrasenaComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
