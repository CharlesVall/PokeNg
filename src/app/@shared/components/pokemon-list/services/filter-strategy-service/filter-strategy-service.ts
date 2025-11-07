import { inject, Injectable } from '@angular/core';
import { FilterStrategy, PokemonRow } from '@core/models';
import { FilterCriteria } from '@core/models'; 
import { FILTER_STRATEGIES } from '@core/tokens/filter-strategy.token';

@Injectable()
export class FilterStrategyService {
  private readonly filterStrategies = inject(FILTER_STRATEGIES)
  
  public reduceWithFilterStrategies(pokemons: PokemonRow[], criteria: FilterCriteria): PokemonRow[] {
    const fields = Object.keys(criteria) as (keyof FilterCriteria)[];
    let result: PokemonRow[] = [...pokemons];
    
    for (const field of fields) {
      const filterStrategy = this.findStrategy(field);
    
      if (filterStrategy) {
        const filterValue = criteria[field];
        result = filterStrategy.reduce(result, filterValue);
      }
    }
  
    return result;
  }

  private findStrategy(field: keyof FilterCriteria): FilterStrategy | null {
    return this.filterStrategies.find(strategy => strategy.supports(field)) ?? null;
  }
}