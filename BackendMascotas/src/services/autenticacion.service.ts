import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Usuario } from '../models';
import { UsuarioRepository } from '../repositories';
import { Llaves } from '../config/llaves';
const generador = require('password-generator');
const cryptoJS = require('crypto-js'); 
const jwt = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository
  ) {}

  /*
   * Add service methods here
   */
  
  GenerarContrasena(){
    let contrasena = generador(8,false);
    return contrasena;
  }
  
  CifrarContrasena(contrasena:string){
    let contrasenaCifrada = cryptoJS.MD5(contrasena).toString();
    return contrasenaCifrada;
  }

  IdentificarPersona(usuario: string, contrasena: string){
    try{
      //let claveEncriptadaUsuario = cryptoJS.MD5(contrasena).toString();
      // let u = this.usuarioRepository.findOne({where: {correo: usuario, contrasena:claveEncriptadaUsuario}});
      let u = this.usuarioRepository.findOne({where: {correo: usuario, contrasena:contrasena}});
      if(u){
        return u;
      }
      return false;

    }catch{
      return false;
    }
  }

  GenerarTokenJWT(usuario: Usuario){
    let token = jwt.sign({
      data: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre,
        rol: usuario.rol
      }
    },
    Llaves.contrasenaJWT);
    return token;
  }

  ValidarTokenJWT(token: string){
    try{
      let datos = jwt.verify(token, Llaves.contrasenaJWT);
      return datos;
    }catch{
      return false;
    }
  }

}
