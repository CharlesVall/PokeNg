import { inject, Injectable } from '@angular/core';
import { PokemonRow } from '@core/models';
import { PokemonService } from '@core/services/pokemon-service/pokemon.service';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FilterStrategyService } from '../filter-strategy-service/filter-strategy-service';
import { FilterStateService } from '../filter-state-service/filter-state-service';

@Injectable()
export class ListDataService {
  private readonly pokemonService = inject(PokemonService);
  private readonly filterStrategyService = inject(FilterStrategyService)
  private readonly filterStateService = inject(FilterStateService)

  private readonly pokemonRowData$ = this.pokemonService
    .getAllPokemonRows()
    .pipe(shareReplay(1));

  public readonly filteredPokemons$: Observable<PokemonRow[]> = combineLatest([
    this.pokemonRowData$,
    this.filterStateService.filters$
  ]).pipe(
    map(([pokemons, filters]) => {
      return this.filterStrategyService.applyFilters(pokemons, filters);
    })
  );
}
