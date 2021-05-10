import {Entity, model, property} from '@loopback/repository';

@model()
export class Utilisateur extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idutilisateur?: number;

  @property({
    type: 'boolean',
  })
  gerant?: boolean;

  @property({
    type: 'string',
  })
  indice?: string;

  @property({
    type: 'string',
    required: true,
  })
  motdepasse: string;

  @property({
    type: 'boolean',
  })
  proprietaire?: boolean;

  @property({
    type: 'string',
    required: true,
  })
  pseudonyme: string;

  @property({
    type: 'number',
    required: true,
  })
  idemploye: number;

  @property({
    type: 'boolean',
  })
  reinitialiser?: boolean;


  constructor(data?: Partial<Utilisateur>) {
    super(data);
  }
}

export interface UtilisateurRelations {
  // describe navigational properties here
}

export type UtilisateurWithRelations = Utilisateur & UtilisateurRelations;
