import { Injectable } from '@angular/core';
import { FilterStrategy } from '@core/models';
import { PokemonRow } from '@core/models';

@Injectable()
export class IdFilterStrategy implements FilterStrategy {
  supports(criteria: keyof any): boolean {
    return criteria === 'id';
  }

  reduce(pokemons: PokemonRow[], id: string): PokemonRow[] {
    if (!id?.trim()) {
      return pokemons;
    }

    return pokemons.filter(pokemon => pokemon.id.toString().includes(id));
  }
}
