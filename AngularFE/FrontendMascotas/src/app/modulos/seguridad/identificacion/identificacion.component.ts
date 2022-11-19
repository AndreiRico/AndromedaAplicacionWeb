import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoJS = require("crypto-js")
@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'contrasena': ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) { }
  ngOnInit(): void {
  }

  IdentificarUsuario() {
    let usuario = this.fgValidador.controls["usuario"].value;
    let contrasena = this.fgValidador.controls["contrasena"].value;
    let contrasenaCifrada = cryptoJS.MD5(contrasena).toString();
    alert(usuario)
    alert(`${contrasena}\n${contrasenaCifrada}`)
    this.servicioSeguridad.Identificar(usuario, contrasenaCifrada).subscribe((datos: any) => {
      alert("Datos correctos!!")
      this.servicioSeguridad.AlmacenarSesion(datos);
    }, (error: any) => {
      alert("Datos invalidos!!")
    })
  }
}
