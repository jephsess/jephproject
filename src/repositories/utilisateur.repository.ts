import {DefaultCrudRepository} from '@loopback/repository';
import {Utilisateur, UtilisateurRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UtilisateurRepository extends DefaultCrudRepository<
  Utilisateur,
  typeof Utilisateur.prototype.idutilisateur,
  UtilisateurRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Utilisateur, dataSource);
  }
}
