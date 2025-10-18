import { Mfe, PokemonDetailsDto } from './interfaces/PokemonDetailsDto'
import { PokemonType } from './interfaces/PokemonType'
import { Sprites } from './interfaces/PokemonSprites'
import { Ability } from './interfaces/PokemonAbility'
import { Stat } from './interfaces/PokemonStat'
import { PokemonId } from './PokemonId'

export class PokemonDetails {
  id: PokemonId;
  moves: Mfe[];
  name: string;
  types: PokemonType[];
  sprites: Sprites;
  abilities: Ability[];
  stats: Stat[];

  constructor(pokemonDetailsData: PokemonDetailsDto) {
    this.id = new PokemonId(pokemonDetailsData.id);
    this.moves = pokemonDetailsData.moves
    this.name = pokemonDetailsData.name;
    this.types = pokemonDetailsData.types
    this.sprites = pokemonDetailsData.sprites;
    this.abilities = pokemonDetailsData.abilities;
    this.stats = pokemonDetailsData.stats
  }

  static fromDto(dto: PokemonDetailsDto): PokemonDetails {
    return new PokemonDetails(dto);
  }
}