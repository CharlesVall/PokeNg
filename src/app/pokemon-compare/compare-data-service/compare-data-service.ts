import { inject, Injectable, effect, signal, computed } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { PokemonComparable, PokemonDetails, PokemonId } from '@core/models';
import { PokemonService } from '@core/services/pokemon-service/pokemon.service';
import { SelectedPokemonService } from '@shared/components/pokemon-list/services/selected-pokemon-service/selected-pokemon-service';
import { combineLatest, map, Observable, of, switchAll } from 'rxjs';

@Injectable()
export class CompareDataService {
  private readonly pokemonService = inject(PokemonService);
  private readonly selectedPokemonService = inject(SelectedPokemonService);

  private readonly selectedIdsList = this.selectedPokemonService.selectedIdsList
  
  private readonly selectedPokemonDetailsMap = signal(
    new Map<PokemonId, Observable<PokemonDetails>>()
  )

  private readonly selectedPokemonDetailsList = computed(() => {
    const observables = Array.from(this.selectedPokemonDetailsMap().values())
    return observables.length ? combineLatest(observables) : of([]);
  });

  public getSelectedPokemonDetailsList(): Observable<PokemonDetails[]> {
    return toObservable(this.selectedPokemonDetailsList).pipe(switchAll())!
  }

  public getSelectPokemonCompareList(): Observable<PokemonComparable[]> {
    return this.getSelectedPokemonDetailsList().pipe(
      map(detailsList =>
        detailsList.map(details => PokemonComparable.fromDetails(details))
      )
    )
  }

  public constructor() {
    effect(() => {
      const selectedIds = this.selectedIdsList();
      const newMap = new Map<PokemonId, Observable<PokemonDetails>>();

      selectedIds.forEach(pokemonId => {
        const pokemonDetails = this.pokemonService.getPokemonDetailsById(pokemonId)
        newMap.set(pokemonId, pokemonDetails)
      })

      this.selectedPokemonDetailsMap.set(newMap)
    })
  }
}
