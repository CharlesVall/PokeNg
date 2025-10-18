import { Ability } from './PokemonAbility';
import { Sprites } from './PokemonSprites';
import { PokemonType } from './PokemonType';

export interface PokemonRowDto {
  id: number;
  name: string;
  abilities: Ability[];
  types: PokemonType[];
  sprites: Sprites;
}