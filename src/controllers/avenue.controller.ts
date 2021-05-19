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
import {Avenue} from '../models';
import {AvenueRepository} from '../repositories';

export class AvenueController {
  constructor(
    @repository(AvenueRepository)
    public avenueRepository : AvenueRepository,
  ) {}

  @post('/avenues', {
    responses: {
      '200': {
        description: 'Avenue model instance',
        content: {'application/json': {schema: getModelSchemaRef(Avenue)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avenue, {
            title: 'NewAvenue',
            exclude: ['idavenue'],
          }),
        },
      },
    })
    avenue: Omit<Avenue, 'idavenue'>,
  ): Promise<Avenue> {
    return this.avenueRepository.create(avenue);
  }

  @get('/avenues/count', {
    responses: {
      '200': {
        description: 'Avenue model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Avenue) where?: Where<Avenue>,
  ): Promise<Count> {
    return this.avenueRepository.count(where);
  }

  @get('/avenues', {
    responses: {
      '200': {
        description: 'Array of Avenue model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Avenue, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Avenue) filter?: Filter<Avenue>,
  ): Promise<Avenue[]> {
    return this.avenueRepository.find(filter);
  }

  @patch('/avenues', {
    responses: {
      '200': {
        description: 'Avenue PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avenue, {partial: true}),
        },
      },
    })
    avenue: Avenue,
    @param.where(Avenue) where?: Where<Avenue>,
  ): Promise<Count> {
    return this.avenueRepository.updateAll(avenue, where);
  }

  @get('/avenues/{id}', {
    responses: {
      '200': {
        description: 'Avenue model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Avenue, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Avenue, {exclude: 'where'}) filter?: FilterExcludingWhere<Avenue>
  ): Promise<Avenue> {
    return this.avenueRepository.findById(id, filter);
  }

  @patch('/avenues/{id}', {
    responses: {
      '204': {
        description: 'Avenue PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Avenue, {partial: true}),
        },
      },
    })
    avenue: Avenue,
  ): Promise<void> {
    await this.avenueRepository.updateById(id, avenue);
  }

  @put('/avenues/{id}', {
    responses: {
      '204': {
        description: 'Avenue PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() avenue: Avenue,
  ): Promise<void> {
    await this.avenueRepository.replaceById(id, avenue);
  }

  @del('/avenues/{id}', {
    responses: {
      '204': {
        description: 'Avenue DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.avenueRepository.deleteById(id);
  }
}
