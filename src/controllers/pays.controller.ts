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
import {Pays} from '../models';
import {PaysRepository} from '../repositories';

export class PaysController {
  constructor(
    @repository(PaysRepository)
    public paysRepository : PaysRepository,
  ) {}

  @post('/pays', {
    responses: {
      '200': {
        description: 'Pays model instance',
        content: {'application/json': {schema: getModelSchemaRef(Pays)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pays, {
            title: 'NewPays',
            exclude: ['idpays'],
          }),
        },
      },
    })
    pays: Omit<Pays, 'idpays'>,
  ): Promise<Pays> {
    return this.paysRepository.create(pays);
  }

  @get('/pays/count', {
    responses: {
      '200': {
        description: 'Pays model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Pays) where?: Where<Pays>,
  ): Promise<Count> {
    return this.paysRepository.count(where);
  }

  @get('/pays', {
    responses: {
      '200': {
        description: 'Array of Pays model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Pays, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Pays) filter?: Filter<Pays>,
  ): Promise<Pays[]> {
    return this.paysRepository.find(filter);
  }

  @patch('/pays', {
    responses: {
      '200': {
        description: 'Pays PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pays, {partial: true}),
        },
      },
    })
    pays: Pays,
    @param.where(Pays) where?: Where<Pays>,
  ): Promise<Count> {
    return this.paysRepository.updateAll(pays, where);
  }

  @get('/pays/{id}', {
    responses: {
      '200': {
        description: 'Pays model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Pays, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Pays, {exclude: 'where'}) filter?: FilterExcludingWhere<Pays>
  ): Promise<Pays> {
    return this.paysRepository.findById(id, filter);
  }

  @patch('/pays/{id}', {
    responses: {
      '204': {
        description: 'Pays PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Pays, {partial: true}),
        },
      },
    })
    pays: Pays,
  ): Promise<void> {
    await this.paysRepository.updateById(id, pays);
  }

  @put('/pays/{id}', {
    responses: {
      '204': {
        description: 'Pays PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pays: Pays,
  ): Promise<void> {
    await this.paysRepository.replaceById(id, pays);
  }

  @del('/pays/{id}', {
    responses: {
      '204': {
        description: 'Pays DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.paysRepository.deleteById(id);
  }
}
