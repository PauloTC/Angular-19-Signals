export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export enum Gender {
  'MALE' = 'Male',
  'FEMALE' = 'Female',
  'GENDERLESS' = 'Genderless',
  'UNKNOWN' = 'unknown',
}

export interface CharacterInfo {
  info: Info;
  results: Character[];
}

export interface LinkedElement {
  name: string;
  link: string;
}

export interface Origin extends LinkedElement {}
export interface Location extends LinkedElement {}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const emptyCharacter: Character = {
  id: 0,
  name: '',
  status: '',
  species: '',
  type: '',
  gender: Gender.MALE, //Obligo al desarrollador a que el género sea uno de los valores porque yo ya se que valores va a tener
  origin: {
    name: '',
    link: '',
  },
  location: {
    name: '',
    link: '',
  },
  image: '',
  episode: [],
  url: '',
  created: '',
};
