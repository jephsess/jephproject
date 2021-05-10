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
import {Commandecredit} from '../models';
import {CommandecreditRepository} from '../repositories';

export class CommandecreditController {
  constructor(
    @repository(CommandecreditRepository)
    public commandecreditRepository : CommandecreditRepository,
  ) {}

  @post('/commandecredits', {
    responses: {
      '200': {
        description: 'Commandecredit model instance',
        content: {'application/json': {schema: getModelSchemaRef(Commandecredit)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commandecredit, {
            title: 'NewCommandecredit',
            exclude: ['idcommandecredit'],
          }),
        },
      },
    })
    commandecredit: Omit<Commandecredit, 'idcommandecredit'>,
  ): Promise<Commandecredit> {
    return this.commandecreditRepository.create(commandecredit);
  }

  @get('/commandecredits/count', {
    responses: {
      '200': {
        description: 'Commandecredit model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Commandecredit) where?: Where<Commandecredit>,
  ): Promise<Count> {
    return this.commandecreditRepository.count(where);
  }

  @get('/commandecredits', {
    responses: {
      '200': {
        description: 'Array of Commandecredit model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Commandecredit, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Commandecredit) filter?: Filter<Commandecredit>,
  ): Promise<Commandecredit[]> {
    return this.commandecreditRepository.find(filter);
  }

  @patch('/commandecredits', {
    responses: {
      '200': {
        description: 'Commandecredit PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commandecredit, {partial: true}),
        },
      },
    })
    commandecredit: Commandecredit,
    @param.where(Commandecredit) where?: Where<Commandecredit>,
  ): Promise<Count> {
    return this.commandecreditRepository.updateAll(commandecredit, where);
  }

  @get('/commandecredits/{id}', {
    responses: {
      '200': {
        description: 'Commandecredit model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Commandecredit, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Commandecredit, {exclude: 'where'}) filter?: FilterExcludingWhere<Commandecredit>
  ): Promise<Commandecredit> {
    return this.commandecreditRepository.findById(id, filter);
  }

  @patch('/commandecredits/{id}', {
    responses: {
      '204': {
        description: 'Commandecredit PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Commandecredit, {partial: true}),
        },
      },
    })
    commandecredit: Commandecredit,
  ): Promise<void> {
    await this.commandecreditRepository.updateById(id, commandecredit);
  }

  @put('/commandecredits/{id}', {
    responses: {
      '204': {
        description: 'Commandecredit PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() commandecredit: Commandecredit,
  ): Promise<void> {
    await this.commandecreditRepository.replaceById(id, commandecredit);
  }

  @del('/commandecredits/{id}', {
    responses: {
      '204': {
        description: 'Commandecredit DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.commandecreditRepository.deleteById(id);
  }
}
