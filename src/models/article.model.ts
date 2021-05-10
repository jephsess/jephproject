import {Entity, model, property} from '@loopback/repository';

@model()
export class Article extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idarticle?: number;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  designation: string;

  @property({
    type: 'string',
  })
  emballage?: string;

  @property({
    type: 'string',
    required: true,
  })
  mesure: string;

  @property({
    type: 'Buffer',
  })
  photo?: Buffer;

  @property({
    type: 'number',
    required: true,
  })
  prixventeunitaire: number;

  @property({
    type: 'number',
    required: true,
  })
  quantiteenstock: number;

  @property({
    type: 'number',
  })
  seuilapprov?: number;

  @property({
    type: 'number',
    required: true,
  })
  idcategorie: number;

  @property({
    type: 'number',
  })
  idpresentation?: number;

  @property({
    type: 'number',
  })
  idmagasin?: number;


  constructor(data?: Partial<Article>) {
    super(data);
  }
}

export interface ArticleRelations {
  // describe navigational properties here
}

export type ArticleWithRelations = Article & ArticleRelations;
