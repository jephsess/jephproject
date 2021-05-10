import {Entity, model, property} from '@loopback/repository';

@model()
export class Lignecommandes extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idlignecommande?: number;

  @property({
    type: 'number',
    required: true,
  })
  nettotal: number;

  @property({
    type: 'number',
    required: true,
  })
  prixunitaire: number;

  @property({
    type: 'number',
    required: true,
  })
  quantite: number;

  @property({
    type: 'number',
    required: true,
  })
  rabais: number;

  @property({
    type: 'number',
    required: true,
  })
  remise: number;

  @property({
    type: 'number',
    required: true,
  })
  idcommande: number;

  @property({
    type: 'number',
    required: true,
  })
  idarticle: number;


  constructor(data?: Partial<Lignecommandes>) {
    super(data);
  }
}

export interface LignecommandesRelations {
  // describe navigational properties here
}

export type LignecommandesWithRelations = Lignecommandes & LignecommandesRelations;
