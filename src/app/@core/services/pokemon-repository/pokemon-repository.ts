import { Injectable, inject } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PokemonRowData, PokemonSpecies } from '@core/models/';
import { PokemonId } from '@core/models/';
import { PokemonDetailsData } from '@core/models/';
import { API_URL } from '@core/tokens/api-url.token';
import { hardCache } from '@paddls/rxjs-common';


@Injectable({
  providedIn: 'root',
})
export class PokemonRepository {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL)  

  private readonly pokemonDetailsCache = new Map<PokemonId, Observable<PokemonDetailsData>>();
  private readonly pokemonSpeciesCache = new Map<PokemonId, Observable<PokemonSpecies>>();

  public getAllPokemonRows(): Observable<PokemonRowData[]> {
    return this.http.get<PokemonRowData[]>('pokemon-data.json').pipe(
      hardCache()
    )
  }
  
  public getPokemonRowById(pokemonId: PokemonId): Observable<PokemonRowData> {  
    return this.getAllPokemonRows().pipe(
      map(pokemons => {
        const pokemon = pokemons.find(pokemon => pokemon.id === pokemonId.value);
        if (!pokemon) {
          throw new Error(`Pokemon with ID ${pokemonId.value} not found`);
        }
        return pokemon;
      })
    );
  }

  public getPokemonDetailsById(pokemonId: PokemonId): Observable<PokemonDetailsData> {
    if (this.pokemonDetailsCache.has(pokemonId)) {
      return this.pokemonDetailsCache.get(pokemonId)!
    }

    const pokemon$ = this.http
      .get<PokemonDetailsData>(`${this.apiUrl}/pokemon/${pokemonId.value}`)
      .pipe(hardCache());

    this.pokemonDetailsCache.set(pokemonId, pokemon$);
    return pokemon$;
  }

  public getPokemonSpeciesById(pokemonId: PokemonId): Observable<PokemonSpecies> {
    if (this.pokemonSpeciesCache.has(pokemonId)) {
      return this.pokemonSpeciesCache.get(pokemonId)!
    }

    return this.getPokemonDetailsById(pokemonId).pipe(
      map(details => details.species.url),
      switchMap(url => this.http.get<PokemonSpecies>(url))
    );
  }

  public clearDetailsCache(): void {
    this.pokemonDetailsCache.clear();
  }

  public invalidatePokemon(pokemonId: PokemonId): void {
    this.pokemonDetailsCache.delete(pokemonId);
  }
}
