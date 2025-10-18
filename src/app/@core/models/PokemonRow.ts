import { Ability } from "./interfaces/PokemonAbility";
import { PokemonRowDto } from "./interfaces/PokemonRowDto";
import { Sprites } from "./interfaces/PokemonSprites";
import { PokemonType } from "./interfaces/PokemonType";
import { PokemonId } from "./PokemonId";

export class PokemonRow {
  id: PokemonId;
  name: string;
  abilities: Ability[];
  types: PokemonType[];
  sprites: Sprites;
  constructor(pokemonRowData: PokemonRowDto) {
    this.id = new PokemonId(pokemonRowData.id);
    this.name = pokemonRowData.name;
    this.abilities = pokemonRowData.abilities;
    this.types = pokemonRowData.types;
    this.sprites = pokemonRowData.sprites
  }

  static fromDto(dto: PokemonRowDto): PokemonRow {
    return new PokemonRow(dto);
  }
}