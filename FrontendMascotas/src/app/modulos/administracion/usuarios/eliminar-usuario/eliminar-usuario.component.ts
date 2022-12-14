import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent  implements OnInit {

  id: string = '';

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
  }



  EliminarUsuario(){
    this.servicioUsuario.EliminarUsuario(this.id).subscribe((datos: ModeloUsuario) => {
      alert("Usuario eliminado correctamente");
      this.router.navigate(["/administracion/listar-usuarios"]);
    }, (error: any) => {
      alert("Error al eliminar el usuario");
    })
  }
}