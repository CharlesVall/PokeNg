import { Injectable } from '@angular/core';
import { FilterStrategy } from '@core/models';
import { PokemonRow } from '@core/models';

@Injectable()
export class NameFilterStrategy implements FilterStrategy {
  supports(criteria: keyof any): boolean {
    return criteria === 'name';
  }

  reduce(pokemons: PokemonRow[], name: string): PokemonRow[] {
    if (!name?.trim()) {
      return pokemons;
    }
    
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
  }
}
