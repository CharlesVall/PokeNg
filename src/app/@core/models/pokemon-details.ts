import { PokemonDetailsData } from './interfaces/pokemon-details-data';
import { Ability, GameIndex, Mfe, PokemonType, Sprites, Stat } from './interfaces/pokemon-misc';
import { PokemonId } from './pokemon-id'

export class PokemonDetails {
  id: PokemonId;
  moves: Mfe[];
  name: string;
  types: PokemonType[];
  sprites: Sprites;
  abilities: Ability[];
  stats: Stat[];
  gameIndices: GameIndex[];

  constructor(pokemonDetailsData: PokemonDetailsData) {
    this.id = new PokemonId(pokemonDetailsData.id);
    this.moves = pokemonDetailsData.moves
    this.name = pokemonDetailsData.name;
    this.types = pokemonDetailsData.types
    this.sprites = pokemonDetailsData.sprites;
    this.abilities = pokemonDetailsData.abilities;
    this.stats = pokemonDetailsData.stats
    this.gameIndices = pokemonDetailsData.game_indices;
  }

  public static fromData(data: PokemonDetailsData): PokemonDetails {
    return new PokemonDetails(data);
  }
}