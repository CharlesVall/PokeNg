import { Ability, PokemonType, Sprites } from "./pokemon-misc";

export interface PokemonRowData {
  id: number;
  name: string;
  abilities: Ability[];
  types: PokemonType[];
  sprites: Sprites;
}