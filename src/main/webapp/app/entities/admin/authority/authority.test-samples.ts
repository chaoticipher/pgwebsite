import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'd5b821db-012c-4fb5-9ca0-e236384694cf',
};

export const sampleWithPartialData: IAuthority = {
  name: 'ff2c5672-a3f0-4f7a-89af-3100a4fab766',
};

export const sampleWithFullData: IAuthority = {
  name: '8ec3828e-75c4-471a-9799-fe42299a39b2',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
