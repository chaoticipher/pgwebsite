import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 5602,
  login: 'y?@6Z',
};

export const sampleWithPartialData: IUser = {
  id: 19767,
  login: 'iC~m9p@jS\\rTZcI\\wm\\nf-rwC\\44zD\\7c',
};

export const sampleWithFullData: IUser = {
  id: 7143,
  login: '5Rl.Q@66b9BC\\\'0Yi\\"iE\\ZI8f\\71TO',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
