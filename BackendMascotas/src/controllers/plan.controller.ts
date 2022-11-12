import { authenticate } from '@loopback/authentication';
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
} from '@loopback/rest';
import {Plan} from '../models';
import {PlanRepository} from '../repositories';


export class PlanController {
  constructor(
    @repository(PlanRepository)
    public planRepository : PlanRepository,
  ) {}

  //--------------------------------------------------------
  
  //@authenticate("admin")

  //---------------- CREAR PLAN ------------------

  @post('/plans')
  @response(200, {
    description: 'Plan model instance',
    content: {'application/json': {schema: getModelSchemaRef(Plan)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plan, {
            title: 'NewPlan',
            exclude: ['id'],
          }),
        },
      },
    })
    plan: Omit<Plan, 'id'>,
  ): Promise<Plan> {
    return this.planRepository.create(plan);
  }
    
  //---------------- CONTAR PLANES ------------------

  @authenticate("admin")
  
  @get('/plans/count')
  @response(200, {
    description: 'Plan model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Plan) where?: Where<Plan>,
  ): Promise<Count> {
    return this.planRepository.count(where);
  }

  //---------------- MOSTRAR TODOS LOS PLANES ------------------

  @authenticate("admin")

  @get('/plans')
  @response(200, {
    description: 'Array of Plan model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Plan, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Plan) filter?: Filter<Plan>,
  ): Promise<Plan[]> {
    return this.planRepository.find(filter);
  }

  //---------------- ACTUALIZAR EN TODOS LOS PLANES LOS CAMPOS ESPECIFICADOS -------------------

  @authenticate("admin")

  @patch('/plans')
  @response(200, {
    description: 'Plan PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plan, {partial: true}),
        },
      },
    })
    plan: Plan,
    @param.where(Plan) where?: Where<Plan>,
  ): Promise<Count> {
    return this.planRepository.updateAll(plan, where);
  }

  //------------------- CONSULTAR PLAN POR ID ------------------------

  @authenticate("admin")

  @get('/plans/{id}')
  @response(200, {
    description: 'Plan model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Plan, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Plan, {exclude: 'where'}) filter?: FilterExcludingWhere<Plan>
  ): Promise<Plan> {
    return this.planRepository.findById(id, filter);
  }

  //------------------ ACTUALIZAR ALGUNOS CAMPOS DE UN PLAN  ---------------

  @authenticate("admin")

  @patch('/plans/{id}')
  @response(204, {
    description: 'Plan PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plan, {partial: true}),
        },
      },
    })
    plan: Plan,
  ): Promise<void> {
    await this.planRepository.updateById(id, plan);
  }

  //---------------- ACTUALIZAR TODOS LOS CAMPOS DE UN PLAN ---------------

  @authenticate("admin")

  @put('/plans/{id}')
  @response(204, {
    description: 'Plan PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() plan: Plan,
  ): Promise<void> {
    await this.planRepository.replaceById(id, plan);
  }

  //------------------ ELIMINAR UN PLAN ---------------

  @authenticate("admin")

  @del('/plans/{id}')
  @response(204, {
    description: 'Plan DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.planRepository.deleteById(id);
  }
}
