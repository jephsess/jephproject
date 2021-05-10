import {Entity, model, property} from '@loopback/repository';

@model()
export class Commande extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idcommande?: number;

  @property({
    type: 'date',
  })
  datecommande?: string;

  @property({
    type: 'date',
  })
  datedemandee?: string;

  @property({
    type: 'date',
  })
  dateexpedition?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'string',
    required: true,
  })
  modepaiement: string;

  @property({
    type: 'number',
    required: true,
  })
  idclient: number;

  @property({
    type: 'number',
    required: true,
  })
  idemploye: number;


  constructor(data?: Partial<Commande>) {
    super(data);
  }
}

export interface CommandeRelations {
  // describe navigational properties here
}

export type CommandeWithRelations = Commande & CommandeRelations;
