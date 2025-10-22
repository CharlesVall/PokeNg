export class PokemonId {
  public static readonly MIN_POKEMON_ID: number = 1;
  public static readonly MAX_POKEMON_ID: number = 1025;

  readonly value: number;

  constructor(pokemonId: number) {
    if (!PokemonId.isValid(pokemonId)) {
      throw new Error(
        `Invalid Pokemon ID: ${pokemonId}. Must be between ${PokemonId.MIN_POKEMON_ID} and ${PokemonId.MAX_POKEMON_ID}.`
      );
    }
    this.value = pokemonId;
  }

  private static isValid(id: number): boolean {
    return id >= this.MIN_POKEMON_ID && id <= this.MAX_POKEMON_ID;
  }

  next(): PokemonId {
    const nextId = this.value === PokemonId.MAX_POKEMON_ID 
      ? PokemonId.MIN_POKEMON_ID 
      : this.value + 1;
    return new PokemonId(nextId);
  }

  previous(): PokemonId {
    const prevId = this.value === PokemonId.MIN_POKEMON_ID 
      ? PokemonId.MAX_POKEMON_ID 
      : this.value - 1;
    return new PokemonId(prevId);
  }

  toString(): string {
    return this.value.toString();
  }

  equals(other: PokemonId): boolean {
    return this.value === other.value;
  }
}