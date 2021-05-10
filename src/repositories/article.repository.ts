import {DefaultCrudRepository} from '@loopback/repository';
import {Article, ArticleRelations} from '../models';
import {TekaDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ArticleRepository extends DefaultCrudRepository<
  Article,
  typeof Article.prototype.idarticle,
  ArticleRelations
> {
  constructor(
    @inject('datasources.teka') dataSource: TekaDataSource,
  ) {
    super(Article, dataSource);
  }
}
