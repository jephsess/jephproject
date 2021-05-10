import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Employe extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idemploye?: number;

  @property({
    type: 'string',
  })
  adresse?: string;

  @property({
    type: 'string',
  })
  banque?: string;

  @property({
    type: 'string',
  })
  comptebancaire?: string;

  @property({
    type: 'string',
  })
  contactnom?: string;

  @property({
    type: 'string',
  })
  contanttelephone?: string;

  @property({
    type: 'date',
  })
  dateembauche?: string;

  @property({
    type: 'date',
  })
  datenaissance?: string;

  @property({
    type: 'string',
  })
  deviseprime?: string;

  @property({
    type: 'string',
  })
  devisesalaire?: string;

  @property({
    type: 'string',
    required: true,
  })
  etatcivil: string;

  @property({
    type: 'string',
    required: true,
  })
  nom: string;

  @property({
    type: 'string',
    required: true,
  })
  postnom: string;

  @property({
    type: 'number',
  })
  primeactuel?: number;

  @property({
    type: 'number',
  })
  salaireactuel?: number;

  @property({
    type: 'string',
    required: true,
  })
  sexe: string;

  @property({
    type: 'string',
    required: true,
  })
  telephone: string;

  @property({
    type: 'number',
  })
  dependde?: number;

  @property({
    type: 'number',
  })
  idservice?: number;

  @property({
    type: 'number',
  })
  idmagasin?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Employe>) {
    super(data);
  }
}

export interface EmployeRelations {
  // describe navigational properties here
}

export type EmployeWithRelations = Employe & EmployeRelations;
