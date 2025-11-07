import { inject, Injectable } from '@angular/core';
import { PokemonRow } from '@core/models';
import { PokemonService } from '@core/services/pokemon-service/pokemon.service';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FilterStrategyService } from '../filter-strategy-service/filter-strategy-service';
import { FilterStateService } from '../filter-state-service/filter-state-service';
import { hardCache } from '@paddls/rxjs-common';

@Injectable()
export class ListDataService {
  private readonly pokemonService = inject(PokemonService);
  private readonly filterStrategyService = inject(FilterStrategyService)
  private readonly filterStateService = inject(FilterStateService)

  private readonly pokemonRowData$ = this.pokemonService
    .getAllPokemonRows()
    .pipe(hardCache());

  public readonly filteredPokemons$: Observable<PokemonRow[]> = combineLatest([
    this.pokemonRowData$,
    this.filterStateService.filters$
  ]).pipe(
    map(([pokemons, filters]) => 
      this.filterStrategyService.reduceWithFilterStrategies(pokemons, filters)
    ),
    hardCache()
  );
}
