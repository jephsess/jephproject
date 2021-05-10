import {DefaultCrudRepository} from '@loopback/repository';
import {Lignecommandes, LignecommandesRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LignecommandesRepository extends DefaultCrudRepository<
  Lignecommandes,
  typeof Lignecommandes.prototype.idlignecommande,
  LignecommandesRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Lignecommandes, dataSource);
  }
}
