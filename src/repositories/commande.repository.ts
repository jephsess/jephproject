import {DefaultCrudRepository} from '@loopback/repository';
import {Commande, CommandeRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CommandeRepository extends DefaultCrudRepository<
  Commande,
  typeof Commande.prototype.idcommande,
  CommandeRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Commande, dataSource);
  }
}
