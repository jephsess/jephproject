import {DefaultCrudRepository} from '@loopback/repository';
import {Commandecredit, CommandecreditRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CommandecreditRepository extends DefaultCrudRepository<
  Commandecredit,
  typeof Commandecredit.prototype.idcommandecredit,
  CommandecreditRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Commandecredit, dataSource);
  }
}
