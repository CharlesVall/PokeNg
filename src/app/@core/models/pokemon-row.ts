import { Ability } from "./interfaces/pokemon-ability";
import { PokemonRowData } from "./interfaces/pokemon-row-data";
import { Sprites } from "./interfaces/pokemon-sprites";
import { PokemonType } from "./interfaces/pokemon-type";
import { PokemonId } from "./pokemon-id";

export class PokemonRow {
  id: PokemonId;
  name: string;
  abilities: Ability[];
  types: PokemonType[];
  sprites: Sprites;
  constructor(pokemonRowData: PokemonRowData) {
    this.id = new PokemonId(pokemonRowData.id);
    this.name = pokemonRowData.name;
    this.abilities = pokemonRowData.abilities;
    this.types = pokemonRowData.types;
    this.sprites = pokemonRowData.sprites
  }

  static fromData(data: PokemonRowData): PokemonRow {
    return new PokemonRow(data);
  }
}