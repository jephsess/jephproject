import {DefaultCrudRepository} from '@loopback/repository';
import {Pays, PaysRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PaysRepository extends DefaultCrudRepository<
  Pays,
  typeof Pays.prototype.idpays,
  PaysRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Pays, dataSource);
  }
}
