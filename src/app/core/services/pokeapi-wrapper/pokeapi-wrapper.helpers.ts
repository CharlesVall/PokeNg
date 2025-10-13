import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const pokeapiUrl = 'https://pokeapi.co/api/v2/'

export function fetchAllPokemon(http: HttpClient): Observable<any> {
  return http.get(`${pokeapiUrl}/pokemon?limit=1025`);
}

export function fetchPokemonById(pokemonId: Number, http: HttpClient): Observable<any> {
  return http.get(`${pokeapiUrl}/pokemon/${pokemonId}`)
}

export function fetchPokemonByUrl(pokemonUrl: String, http: HttpClient): Observable<any> {
  return http.get(`${pokemonUrl}`)
}

export function fetchPokemonDetailsFromJSON(http: HttpClient): Observable<any> {
  return http.get('pokemon-data.json')
}

