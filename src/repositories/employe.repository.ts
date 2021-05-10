import {DefaultCrudRepository} from '@loopback/repository';
import {Employe, EmployeRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EmployeRepository extends DefaultCrudRepository<
  Employe,
  typeof Employe.prototype.idemploye,
  EmployeRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Employe, dataSource);
  }
}
