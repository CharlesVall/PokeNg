import { Mfe, PokemonDetailsData } from './interfaces/pokemon-details-data'
import { PokemonType } from './interfaces/pokemon-type'
import { Sprites } from './interfaces/pokemon-sprites'
import { Ability } from './interfaces/pokemon-ability'
import { Stat } from './interfaces/pokemon-stat'
import { PokemonId } from './pokemon-id'

export class PokemonDetails {
  id: PokemonId;
  moves: Mfe[];
  name: string;
  types: PokemonType[];
  sprites: Sprites;
  abilities: Ability[];
  stats: Stat[];

  constructor(pokemonDetailsData: PokemonDetailsData) {
    this.id = new PokemonId(pokemonDetailsData.id);
    this.moves = pokemonDetailsData.moves
    this.name = pokemonDetailsData.name;
    this.types = pokemonDetailsData.types
    this.sprites = pokemonDetailsData.sprites;
    this.abilities = pokemonDetailsData.abilities;
    this.stats = pokemonDetailsData.stats
  }

  static fromDto(data: PokemonDetailsData): PokemonDetails {
    return new PokemonDetails(data);
  }
}