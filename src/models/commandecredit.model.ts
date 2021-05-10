import {Entity, model, property} from '@loopback/repository';

@model()
export class Commandecredit extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idcommandecredit?: number;

  @property({
    type: 'date',
    required: true,
  })
  datecredit: string;

  @property({
    type: 'string',
  })
  device?: string;

  @property({
    type: 'number',
    required: true,
  })
  montantcredit: number;

  @property({
    type: 'number',
  })
  payer?: number;

  @property({
    type: 'number',
  })
  restepayer?: number;

  @property({
    type: 'number',
    required: true,
  })
  idcommande: number;


  constructor(data?: Partial<Commandecredit>) {
    super(data);
  }
}

export interface CommandecreditRelations {
  // describe navigational properties here
}

export type CommandecreditWithRelations = Commandecredit & CommandecreditRelations;
