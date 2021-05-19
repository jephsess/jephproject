import {Entity, model, property} from '@loopback/repository';

@model()
export class Magasin extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idmagasin?: number;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  telephone: string;

  @property({
    type: 'string',
    required: true,
  })
  idnationale: string;

  @property({
    type: 'string',
    required: true,
  })
  rccm: string;

  @property({
    type: 'string',
    required: true,
  })
  impot: string;

  @property({
    type: 'number',
    required: true,
  })
  numero: number;

  @property({
    type: 'buffer',
  })
  logo?: Buffer;

  @property({
    type: 'number',
  })
  idproprietaire?: number;

  @property({
    type: 'number',
    required: true,
  })
  idavenue: number;


  constructor(data?: Partial<Magasin>) {
    super(data);
  }
}

export interface MagasinRelations {
  // describe navigational properties here
}

export type MagasinWithRelations = Magasin & MagasinRelations;
