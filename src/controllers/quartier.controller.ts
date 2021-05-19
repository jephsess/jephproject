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
import {Quartier} from '../models';
import {QuartierRepository} from '../repositories';

export class QuartierController {
  constructor(
    @repository(QuartierRepository)
    public quartierRepository : QuartierRepository,
  ) {}

  @post('/quartiers', {
    responses: {
      '200': {
        description: 'Quartier model instance',
        content: {'application/json': {schema: getModelSchemaRef(Quartier)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quartier, {
            title: 'NewQuartier',
            exclude: ['idquartier'],
          }),
        },
      },
    })
    quartier: Omit<Quartier, 'idquartier'>,
  ): Promise<Quartier> {
    return this.quartierRepository.create(quartier);
  }

  @get('/quartiers/count', {
    responses: {
      '200': {
        description: 'Quartier model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Quartier) where?: Where<Quartier>,
  ): Promise<Count> {
    return this.quartierRepository.count(where);
  }

  @get('/quartiers', {
    responses: {
      '200': {
        description: 'Array of Quartier model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Quartier, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Quartier) filter?: Filter<Quartier>,
  ): Promise<Quartier[]> {
    return this.quartierRepository.find(filter);
  }

  @patch('/quartiers', {
    responses: {
      '200': {
        description: 'Quartier PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quartier, {partial: true}),
        },
      },
    })
    quartier: Quartier,
    @param.where(Quartier) where?: Where<Quartier>,
  ): Promise<Count> {
    return this.quartierRepository.updateAll(quartier, where);
  }

  @get('/quartiers/{id}', {
    responses: {
      '200': {
        description: 'Quartier model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Quartier, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Quartier, {exclude: 'where'}) filter?: FilterExcludingWhere<Quartier>
  ): Promise<Quartier> {
    return this.quartierRepository.findById(id, filter);
  }

  @patch('/quartiers/{id}', {
    responses: {
      '204': {
        description: 'Quartier PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Quartier, {partial: true}),
        },
      },
    })
    quartier: Quartier,
  ): Promise<void> {
    await this.quartierRepository.updateById(id, quartier);
  }

  @put('/quartiers/{id}', {
    responses: {
      '204': {
        description: 'Quartier PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() quartier: Quartier,
  ): Promise<void> {
    await this.quartierRepository.replaceById(id, quartier);
  }

  @del('/quartiers/{id}', {
    responses: {
      '204': {
        description: 'Quartier DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.quartierRepository.deleteById(id);
  }
}
