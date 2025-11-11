import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/tokens/api-url.token';
import { EvolutionChain, PokemonId } from '@core/models';
import { map, Observable, switchMap } from 'rxjs';
import { PokemonService } from '../pokemon-service/pokemon.service';

@Injectable({
  providedIn: 'root'
})
export class EvolutionService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = inject(API_URL)
  private readonly pokemonService = inject(PokemonService)

  public getEvolutionChainById(pokemonId: PokemonId): Observable<EvolutionChain> {
    return this.pokemonService.getPokemonSpeciesById(pokemonId).pipe(
      map(species => species.evolution_chain.url),
      switchMap(url => this.http.get<EvolutionChain>(url))
    )
  }
}
