import {Entity, model, property} from '@loopback/repository';

@model()
export class Province extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idprovince?: number;

  @property({
    type: 'string',
    required: true,
  })
  province: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
  })
  idpays: number;


  constructor(data?: Partial<Province>) {
    super(data);
  }
}

export interface ProvinceRelations {
  // describe navigational properties here
}

export type ProvinceWithRelations = Province & ProvinceRelations;
