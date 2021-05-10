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
} from '@loopback/rest';
import {Lignecommandes} from '../models';
import {LignecommandesRepository} from '../repositories';

export class LignecommandesController {
  constructor(
    @repository(LignecommandesRepository)
    public lignecommandesRepository : LignecommandesRepository,
  ) {}

  @post('/lignecommandes', {
    responses: {
      '200': {
        description: 'Lignecommandes model instance',
        content: {'application/json': {schema: getModelSchemaRef(Lignecommandes)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lignecommandes, {
            title: 'NewLignecommandes',
            exclude: ['idlignecommande'],
          }),
        },
      },
    })
    lignecommandes: Omit<Lignecommandes, 'idlignecommande'>,
  ): Promise<Lignecommandes> {
    return this.lignecommandesRepository.create(lignecommandes);
  }

  @get('/lignecommandes/count', {
    responses: {
      '200': {
        description: 'Lignecommandes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Lignecommandes) where?: Where<Lignecommandes>,
  ): Promise<Count> {
    return this.lignecommandesRepository.count(where);
  }

  @get('/lignecommandes', {
    responses: {
      '200': {
        description: 'Array of Lignecommandes model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Lignecommandes, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Lignecommandes) filter?: Filter<Lignecommandes>,
  ): Promise<Lignecommandes[]> {
    return this.lignecommandesRepository.find(filter);
  }

  @patch('/lignecommandes', {
    responses: {
      '200': {
        description: 'Lignecommandes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lignecommandes, {partial: true}),
        },
      },
    })
    lignecommandes: Lignecommandes,
    @param.where(Lignecommandes) where?: Where<Lignecommandes>,
  ): Promise<Count> {
    return this.lignecommandesRepository.updateAll(lignecommandes, where);
  }

  @get('/lignecommandes/{id}', {
    responses: {
      '200': {
        description: 'Lignecommandes model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Lignecommandes, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Lignecommandes, {exclude: 'where'}) filter?: FilterExcludingWhere<Lignecommandes>
  ): Promise<Lignecommandes> {
    return this.lignecommandesRepository.findById(id, filter);
  }

  @patch('/lignecommandes/{id}', {
    responses: {
      '204': {
        description: 'Lignecommandes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Lignecommandes, {partial: true}),
        },
      },
    })
    lignecommandes: Lignecommandes,
  ): Promise<void> {
    await this.lignecommandesRepository.updateById(id, lignecommandes);
  }

  @put('/lignecommandes/{id}', {
    responses: {
      '204': {
        description: 'Lignecommandes PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() lignecommandes: Lignecommandes,
  ): Promise<void> {
    await this.lignecommandesRepository.replaceById(id, lignecommandes);
  }

  @del('/lignecommandes/{id}', {
    responses: {
      '204': {
        description: 'Lignecommandes DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.lignecommandesRepository.deleteById(id);
  }
}
