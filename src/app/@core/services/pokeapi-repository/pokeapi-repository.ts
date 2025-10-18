import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, shareReplay, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PokemonWithUrlDto } from '@core/models/';
import * as pokeApi from  './pokeapi-repository.helpers'
import { PokemonRowDto } from '@core/models/';
import { PokemonId } from '@core/models/';
import { PokemonDetailsDto } from '@core/models/';

@Injectable({
  providedIn: 'root'
})
export class PokeapiRepository {
  private http = inject(HttpClient);
  private allPokemonsCache$?: Observable<PokemonDetailsDto[]>;
  
  public getAllPokemonUrls(): Observable<PokemonWithUrlDto[]> {
    return pokeApi.fetchAllPokemon(this.http).pipe(
      map(response => response.results)
    )
  }

  public getPokemonDetailsById(pokemonId: PokemonId): Observable<PokemonDetailsDto> {
    return pokeApi.fetchPokemonById(pokemonId, this.http)
  }

  public getAllPokemonRows(): Observable<PokemonRowDto[]> {
    if (!this.allPokemonsCache$) {
      this.allPokemonsCache$ = pokeApi.fetchPokemonDetailsFromJSON(this.http).pipe(
        shareReplay(1),
        catchError(err => {
          this.allPokemonsCache$ = of([]);
          return throwError(() => err);
        })
      )
    }
    return this.allPokemonsCache$
  }

  public getPokemonRowById(pokemonId: PokemonId): Observable<PokemonRowDto> {
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
