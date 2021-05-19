import {Entity, model, property} from '@loopback/repository';

@model()
export class Commune extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idcommune?: number;

  @property({
    type: 'string',
    required: true,
  })
  commune: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
  })
  idprovince: number;


  constructor(data?: Partial<Commune>) {
    super(data);
  }
}

export interface CommuneRelations {
  // describe navigational properties here
}

export type CommuneWithRelations = Commune & CommuneRelations;
