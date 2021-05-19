import {Entity, model, property} from '@loopback/repository';

@model()
export class Pays extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idpays?: number;

  @property({
    type: 'string',
    required: true,
  })
  pays: string;

  @property({
    type: 'string',
  })
  description?: string;


  constructor(data?: Partial<Pays>) {
    super(data);
  }
}

export interface PaysRelations {
  // describe navigational properties here
}

export type PaysWithRelations = Pays & PaysRelations;
