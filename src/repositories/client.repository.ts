import {DefaultCrudRepository} from '@loopback/repository';
import {Client, ClientRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClientRepository extends DefaultCrudRepository<
  Client,
  typeof Client.prototype.idclient,
  ClientRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Client, dataSource);
  }
}
