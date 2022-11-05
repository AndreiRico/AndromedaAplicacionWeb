import { authenticate } from '@loopback/authentication';
import { service } from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import {Credenciales, Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
import { AutenticacionService } from '../services';
const fetch = require('node-fetch');

//@authenticate('admin')

export class UsuarioController {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository : UsuarioRepository,
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService
  ) {}

  @post('/identificarUsuario',{
    responses:{
      '200': {
        description: 'Identificacio de usuario'
      }
    }
  })

  //@authenticate.skip()
  async identificarUsuario(
    @requestBody() credenciales: Credenciales
  ){
    let u = await this.servicioAutenticacion.IdentificarPersona(credenciales.usuario, credenciales.contrasena);
    if(u){
      let token = this.servicioAutenticacion.GenerarTokenJWT(u);
      return{
        datos:{
          nombre: u.nombre,
          correo: u.correo,
          id: u.id,
          rol: u.rol
          //agregar atributos de los usaurios
        },
        tk: token
      }
    }else{
      throw new HttpErrors[401]('Datos invalidos');
    }

  }

  //@authenticate('admin')
  @authenticate.skip()
  @post('/usuarios')
  @response(200, {
    description: 'Usuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'id'>,
  ): Promise<Usuario> {
    let contrasena = this.servicioAutenticacion.GenerarContrasena();
    let contrasenaCifrada = this.servicioAutenticacion.CifrarContrasena(contrasena);
    usuario.contrasena = contrasenaCifrada;
    let u = await this.usuarioRepository.create(usuario);

    //notificar usuario por correo
    let destino = usuario.correo;
    let asunto = 'Datos de registro de la plataforma';
    let contenido = `Hola ${usuario.nombre} ${usuario.apellido} bienvenido a mascota feliz, su usuario es ${usuario.correo} y su contraseña es ${contrasena};`
    fetch(`http://127.0.0.1:5000/email?correo_destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
      .then((data:any)=>{
        console.log(data);
      })
      //return u; 
    
    // notificar ususario por sms
    let destino_sms = usuario.telefono;
    let contenido_sms = `Hola ${usuario.nombre}${usuario.apellido} bienvenido a mascota feliz, su usuario es ${usuario.correo} y su contraseña es ${contrasena};`
    fetch(`http://127.0.0.1:5000/mensajetxt?celular_destino=${destino_sms}&contenido=${contenido_sms}`)
      .then((data:any)=>{
        console.log(data);
      })
      return u; 
    
  }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.count(where);
  }

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, {exclude: 'where'}) filter?: FilterExcludingWhere<Usuario>
  ): Promise<Usuario> {
    return this.usuarioRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }
}