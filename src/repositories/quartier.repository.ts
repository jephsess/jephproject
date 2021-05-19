import {DefaultCrudRepository} from '@loopback/repository';
import {Quartier, QuartierRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class QuartierRepository extends DefaultCrudRepository<
  Quartier,
  typeof Quartier.prototype.idquartier,
  QuartierRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Quartier, dataSource);
  }
}
