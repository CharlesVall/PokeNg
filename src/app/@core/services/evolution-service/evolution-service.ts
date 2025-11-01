import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/tokens/api-url.token';
import { PokemonRepository } from '../pokemon-repository/pokemon-repository';
import { EvolutionChain, PokemonId } from '@core/models';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvolutionService {
  private readonly http = inject(HttpClient)
  private readonly apiUrl = inject(API_URL)
  private readonly pokemonRepository = inject(PokemonRepository)

  public getEvolutionChainById(pokemonId: PokemonId): Observable<EvolutionChain> {
    return this.pokemonRepository.getPokemonSpeciesById(pokemonId).pipe(
      map(species => species.evolution_chain.url),
      switchMap(url => this.http.get<EvolutionChain>(url))
    )
  }
}
