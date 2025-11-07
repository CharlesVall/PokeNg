import { PokemonRow, FilterCriteria } from '@core/models';

export interface FilterStrategy {
  supports(criteria: keyof FilterCriteria): boolean;
  reduce(pokemons: PokemonRow[], value: any): PokemonRow[];
}
