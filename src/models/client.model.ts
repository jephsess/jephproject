import {Entity, model, property} from '@loopback/repository';

@model()
export class Client extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idclient?: number;

  @property({
    type: 'string',
  })
  adresse?: string;

  @property({
    type: 'string',
  })
  nom?: string;

  @property({
    type: 'string',
  })
  nomsociete?: string;

  @property({
    type: 'string',
  })
  prenom?: string;

  @property({
    type: 'string',
  })
  sexe?: string;

  @property({
    type: 'string',
  })
  telephone?: string;

  @property({
    type: 'string',
  })
  ville?: string;


  constructor(data?: Partial<Client>) {
    super(data);
  }
}

export interface ClientRelations {
  // describe navigational properties here
}

export type ClientWithRelations = Client & ClientRelations;
