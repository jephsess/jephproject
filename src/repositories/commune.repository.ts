import {DefaultCrudRepository} from '@loopback/repository';
import {Commune, CommuneRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CommuneRepository extends DefaultCrudRepository<
  Commune,
  typeof Commune.prototype.idcommune,
  CommuneRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Commune, dataSource);
  }
}
