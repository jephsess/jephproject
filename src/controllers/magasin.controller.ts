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
import {Magasin} from '../models';
import {MagasinRepository} from '../repositories';

export class MagasinController {
  constructor(
    @repository(MagasinRepository)
    public magasinRepository : MagasinRepository,
  ) {}

  @post('/magasins', {
    responses: {
      '200': {
        description: 'Magasin model instance',
        content: {'application/json': {schema: getModelSchemaRef(Magasin)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Magasin, {
            title: 'NewMagasin',
            exclude: ['idmagasin'],
          }),
        },
      },
    })
    magasin: Omit<Magasin, 'idmagasin'>,
  ): Promise<Magasin> {
    return this.magasinRepository.create(magasin);
  }

  @get('/magasins/count', {
    responses: {
      '200': {
        description: 'Magasin model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Magasin) where?: Where<Magasin>,
  ): Promise<Count> {
    return this.magasinRepository.count(where);
  }

  @get('/magasins', {
    responses: {
      '200': {
        description: 'Array of Magasin model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Magasin, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Magasin) filter?: Filter<Magasin>,
  ): Promise<Magasin[]> {
    return this.magasinRepository.find(filter);
  }

  @patch('/magasins', {
    responses: {
      '200': {
        description: 'Magasin PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Magasin, {partial: true}),
        },
      },
    })
    magasin: Magasin,
    @param.where(Magasin) where?: Where<Magasin>,
  ): Promise<Count> {
    return this.magasinRepository.updateAll(magasin, where);
  }

  @get('/magasins/{id}', {
    responses: {
      '200': {
        description: 'Magasin model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Magasin, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Magasin, {exclude: 'where'}) filter?: FilterExcludingWhere<Magasin>
  ): Promise<Magasin> {
    return this.magasinRepository.findById(id, filter);
  }

  @patch('/magasins/{id}', {
    responses: {
      '204': {
        description: 'Magasin PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Magasin, {partial: true}),
        },
      },
    })
    magasin: Magasin,
  ): Promise<void> {
    await this.magasinRepository.updateById(id, magasin);
  }

  @put('/magasins/{id}', {
    responses: {
      '204': {
        description: 'Magasin PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() magasin: Magasin,
  ): Promise<void> {
    await this.magasinRepository.replaceById(id, magasin);
  }

  @del('/magasins/{id}', {
    responses: {
      '204': {
        description: 'Magasin DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.magasinRepository.deleteById(id);
  }
}
