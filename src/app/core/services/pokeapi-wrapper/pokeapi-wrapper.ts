import { Injectable, inject } from '@angular/core';
import { Observable, catchError, forkJoin, map, of, shareReplay, switchMap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PokemonDetails } from 'app/models/PokemonDetails';
import { PokemonByUrl } from 'app/models/PokemonByUrl';
import * as pokeApi from  './pokeapi-wrapper.helpers'
import { PokemonRow } from 'app/models/PokemonRow';

@Injectable({
  providedIn: 'root'
})
export class PokeapiWrapper {
  private http = inject(HttpClient);
  private pokemonCache = new Map<string, PokemonDetails[]>
  private allPokemonsCache$?: Observable<PokemonDetails[]>;
  
  
  getAllPokemon(): Observable<PokemonByUrl[]> {
    return pokeApi.fetchAllPokemon(this.http).pipe(
      map(response => response.results)
    )
  }

  getPokemonById(pokemonId: Number): Observable<PokemonDetails> {
    return pokeApi.fetchPokemonById(pokemonId, this.http)
  }

  getAllPokemonDetails(): Observable<PokemonRow[]> {
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
}
