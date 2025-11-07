import { Injectable } from '@angular/core';
import { FilterStrategy } from '@core/models';
import { PokemonRow } from '@core/models';

@Injectable()
export class AbilitiesFilterStrategy implements FilterStrategy {
  supports(criteria: keyof any): boolean {
    return criteria === 'abilities';
  }

  reduce(pokemons: PokemonRow[], abilities: string): PokemonRow[] {
    if (!abilities?.trim()) {
      return pokemons;
    }

    const term = abilities.toLowerCase();
    return pokemons.filter(pokemon =>
      pokemon.abilities
      .some(abilityObject => abilityObject.ability.name.toLowerCase().includes(term))
    );
  }
}
