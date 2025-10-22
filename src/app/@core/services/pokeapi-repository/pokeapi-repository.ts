import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of, shareReplay, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { PokemonRowData } from '@core/models/';
import { PokemonId } from '@core/models/';
import { PokemonDetailsData } from '@core/models/';

@Injectable({
  providedIn: 'root'
})
export class PokeapiRepository {
  private http = inject(HttpClient);
  private allPokemonsCache$?: Observable<PokemonRowData[]>;
  private readonly pokeapiUrl = 'https://pokeapi.co/api/v2/'

  public getPokemonDetailsById(pokemonId: PokemonId): Observable<PokemonDetailsData> {
    return this.http.get<PokemonDetailsData>(`${this.pokeapiUrl}/pokemon/${pokemonId.value}`)
  }

  public getAllPokemonRows(): Observable<PokemonRowData[]> {
    if (!this.allPokemonsCache$) {
      this.allPokemonsCache$ = this.http.get<PokemonRowData[]>('pokemon-data.json').pipe(
        shareReplay(1),
        catchError(err => {
          this.allPokemonsCache$ = of([]);
          return throwError(() => err);
        })
      )
    }
    return this.allPokemonsCache$
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
