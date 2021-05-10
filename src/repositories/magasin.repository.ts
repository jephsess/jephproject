import {DefaultCrudRepository} from '@loopback/repository';
import {Magasin, MagasinRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MagasinRepository extends DefaultCrudRepository<
  Magasin,
  typeof Magasin.prototype.idmagasin,
  MagasinRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Magasin, dataSource);
  }
}
