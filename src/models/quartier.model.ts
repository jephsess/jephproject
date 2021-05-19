import {Entity, model, property} from '@loopback/repository';

@model()
export class Quartier extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idquartier?: number;

  @property({
    type: 'string',
    required: true,
  })
  quartier: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
  })
  idcommune: number;


  constructor(data?: Partial<Quartier>) {
    super(data);
  }
}

export interface QuartierRelations {
  // describe navigational properties here
}

export type QuartierWithRelations = Quartier & QuartierRelations;
