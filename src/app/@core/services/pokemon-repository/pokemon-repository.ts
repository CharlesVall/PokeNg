import { Injectable, inject } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PokemonRowData } from '@core/models/';
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

  public getPokemonDetailsById(pokemonId: PokemonId): Observable<PokemonDetailsData> {
    return this.http.get<PokemonDetailsData>(`${this.apiUrl}/pokemon/${pokemonId.value}`)
  }

  public getAllPokemonRows(): Observable<PokemonRowData[]> {
    return this.http.get<PokemonRowData[]>('pokemon-data.json').pipe(
      hardCache()
    )
  }

  public getPokemonRowById(pokemonId: PokemonId): Observable<PokemonRowData> {
    if (pokemonId.value < PokemonId.MIN_POKEMON_ID || pokemonId.value > PokemonId.MAX_POKEMON_ID) {
      return throwError(() => new Error(`Pokemon ID ${pokemonId.value} is out of range (${PokemonId.MIN_POKEMON_ID}-${PokemonId.MAX_POKEMON_ID})`));
    }
  
    return this.getAllPokemonRows().pipe(
      map(pokemons => {
        const pokemon = pokemons.find(p => p.id === pokemonId.value);
        if (!pokemon) {
          throw new Error(`Pokemon with ID ${pokemonId.value} not found`);
        }
        return pokemon;
      })
    );
  }
}
