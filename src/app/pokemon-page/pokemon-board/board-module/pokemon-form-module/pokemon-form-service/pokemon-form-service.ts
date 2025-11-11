import { inject, Injectable } from '@angular/core';
import { Pokemon, PokemonForm, PokemonId } from '@core/models';
import { PokemonService } from '@core/services/pokemon-service/pokemon.service';
import { arrayMap } from '@paddls/rxjs-common';
import { combineLatest, map, Observable, of, switchAll, switchMap } from 'rxjs';

@Injectable()
export class PokemonFormService {
  private readonly pokemonService = inject(PokemonService)

  private getPokemonFormList(pokemonId: PokemonId): Observable<Pokemon[]> {
    const pokemonSpecies = this.pokemonService.getPokemonSpeciesById(pokemonId)
    const pokemonForm = pokemonSpecies.pipe(
      map(species => species.varieties),
      arrayMap(form => form.pokemon)
    )
    return pokemonForm
  }
  
  public getFormDetailsList(pokemonId: PokemonId): Observable<PokemonForm[]> {
    return this.getPokemonFormList(pokemonId).pipe(
      switchMap(forms => {
        if (!forms.length) {
          return of([]);
        }

        const requests = forms.map(form => {
          const parts = form.url.split('/')
          const id = Number(parts[parts.length - 1]);
          return this.pokemonService.getPokemonFormDetailsById(id);
        });

        return combineLatest(requests);
      })
  );
  }
}
