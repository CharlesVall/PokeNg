import { PokemonDetailsData } from "./interfaces/pokemon-details-data";
import { Sprites } from "./interfaces/pokemon-misc";

export class PokemonForm {
  id: number
  name: string
  sprites: Sprites
  private constructor(pokemonData: PokemonDetailsData) {
    this.id = pokemonData.id
    this.name = pokemonData.name
    this.sprites = pokemonData.sprites
  }

  public static fromData(pokemonData: PokemonDetailsData): PokemonForm {
    const pokemonForm = this.constructor(pokemonData)
    return pokemonForm
  }
}