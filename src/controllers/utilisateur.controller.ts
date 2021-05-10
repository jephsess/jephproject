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
import {Utilisateur} from '../models';
import {UtilisateurRepository} from '../repositories';

export class UtilisateurController {
  constructor(
    @repository(UtilisateurRepository)
    public utilisateurRepository : UtilisateurRepository,
  ) {}

  @post('/utilisateurs', {
    responses: {
      '200': {
        description: 'Utilisateur model instance',
        content: {'application/json': {schema: getModelSchemaRef(Utilisateur)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilisateur, {
            title: 'NewUtilisateur',
            exclude: ['idutilisateur'],
          }),
        },
      },
    })
    utilisateur: Omit<Utilisateur, 'idutilisateur'>,
  ): Promise<Utilisateur> {
    return this.utilisateurRepository.create(utilisateur);
  }

  @get('/utilisateurs/count', {
    responses: {
      '200': {
        description: 'Utilisateur model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Utilisateur) where?: Where<Utilisateur>,
  ): Promise<Count> {
    return this.utilisateurRepository.count(where);
  }

  @get('/utilisateurs', {
    responses: {
      '200': {
        description: 'Array of Utilisateur model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Utilisateur, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Utilisateur) filter?: Filter<Utilisateur>,
  ): Promise<Utilisateur[]> {
    return this.utilisateurRepository.find(filter);
  }

  @patch('/utilisateurs', {
    responses: {
      '200': {
        description: 'Utilisateur PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilisateur, {partial: true}),
        },
      },
    })
    utilisateur: Utilisateur,
    @param.where(Utilisateur) where?: Where<Utilisateur>,
  ): Promise<Count> {
    return this.utilisateurRepository.updateAll(utilisateur, where);
  }

  @get('/utilisateurs/{id}', {
    responses: {
      '200': {
        description: 'Utilisateur model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Utilisateur, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Utilisateur, {exclude: 'where'}) filter?: FilterExcludingWhere<Utilisateur>
  ): Promise<Utilisateur> {
    return this.utilisateurRepository.findById(id, filter);
  }

  @patch('/utilisateurs/{id}', {
    responses: {
      '204': {
        description: 'Utilisateur PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Utilisateur, {partial: true}),
        },
      },
    })
    utilisateur: Utilisateur,
  ): Promise<void> {
    await this.utilisateurRepository.updateById(id, utilisateur);
  }

  @put('/utilisateurs/{id}', {
    responses: {
      '204': {
        description: 'Utilisateur PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() utilisateur: Utilisateur,
  ): Promise<void> {
    await this.utilisateurRepository.replaceById(id, utilisateur);
  }

  @del('/utilisateurs/{id}', {
    responses: {
      '204': {
        description: 'Utilisateur DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.utilisateurRepository.deleteById(id);
  }
}
