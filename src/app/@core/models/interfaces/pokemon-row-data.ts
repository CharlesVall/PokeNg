import { Ability } from './pokemon-ability';
import { Sprites } from './pokemon-sprites';
import { PokemonType } from './pokemon-type';

export interface PokemonRowData {
  id: number;
  name: string;
  abilities: Ability[];
  types: PokemonType[];
  sprites: Sprites;
}