import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificacioComponent } from './identificacio/identificacio.component';

const routes: Routes = [
  {
    path: 'identificar',
    component: IdentificacioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
