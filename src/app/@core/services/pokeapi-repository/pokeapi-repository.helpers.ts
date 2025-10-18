import { HttpClient } from '@angular/common/http';
import { PokemonId } from '@core/models/PokemonId';
import { Observable } from 'rxjs';

const pokeapiUrl = 'https://pokeapi.co/api/v2/'

export function fetchAllPokemon(http: HttpClient): Observable<any> {
  return http.get(`${pokeapiUrl}/pokemon?limit=${PokemonId.MAX_POKEMON_ID}`);
}

export function fetchPokemonById(pokemonId: PokemonId, http: HttpClient): Observable<any> {
  return http.get(`${pokeapiUrl}/pokemon/${pokemonId.value}`)
}

export function fetchPokemonByUrl(pokemonUrl: string, http: HttpClient): Observable<any> {
  return http.get(`${pokemonUrl}`)
}

export function fetchPokemonDetailsFromJSON(http: HttpClient): Observable<any> {
  return http.get('pokemon-data.json')
}

