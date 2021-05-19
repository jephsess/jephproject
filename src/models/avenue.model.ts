import {Entity, model, property} from '@loopback/repository';

@model()
export class Avenue extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idavenue?: number;

  @property({
    type: 'string',
    required: true,
  })
  avenue: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
  })
  idquartier: number;


  constructor(data?: Partial<Avenue>) {
    super(data);
  }
}

export interface AvenueRelations {
  // describe navigational properties here
}

export type AvenueWithRelations = Avenue & AvenueRelations;
