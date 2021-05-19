import {DefaultCrudRepository} from '@loopback/repository';
import {Province, ProvinceRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProvinceRepository extends DefaultCrudRepository<
  Province,
  typeof Province.prototype.idprovince,
  ProvinceRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Province, dataSource);
  }
}
