import {DefaultCrudRepository} from '@loopback/repository';
import {Avenue, AvenueRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AvenueRepository extends DefaultCrudRepository<
  Avenue,
  typeof Avenue.prototype.idavenue,
  AvenueRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Avenue, dataSource);
  }
}
