import { Injectable } from '@angular/core';
import { FilterStrategy } from '@core/models';
import { PokemonRow } from '@core/models';

@Injectable()
export class TypesFilterStrategy implements FilterStrategy {
  supports(criteria: keyof any): boolean {
    return criteria === 'types';
  }

  reduce(pokemons: PokemonRow[], types: string[]): PokemonRow[] {
    if (!types?.length) return pokemons;

    return pokemons.filter(pokemon => {
      const pokemonTypes = new Set(pokemon.types.map(typeObject => typeObject.type.name));
      const filterTypes = new Set(types);
      return (
        pokemonTypes.size === filterTypes.size &&
        [...pokemonTypes].every(type => filterTypes.has(type))
      );
    });
  }
}
