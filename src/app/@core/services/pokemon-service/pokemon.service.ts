import { inject, Injectable } from '@angular/core';
import { PokeapiRepository } from '../pokeapi-repository/pokeapi-repository';
import { PokemonDetails } from '@core/models/pokemon-details';
import { map, Observable } from 'rxjs'
import { PokemonRow } from '@core/models/pokemon-row';
import { PokemonId } from '@core/models/pokemon-id';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly pokeapiRepository = inject(PokeapiRepository);

  public getPokemonDetailsById(pokemonId: PokemonId): Observable<PokemonDetails> {
    return this.pokeapiRepository.getPokemonDetailsById(pokemonId).pipe(
      map(data => PokemonDetails.fromDto(data))
    )
  }
  
  public getAllPokemonRows(): Observable<PokemonRow[]> {
    return this.pokeapiRepository.getAllPokemonRows().pipe(
      map(pokemonListData => pokemonListData.map(data => PokemonRow.fromDto(data)))
    );
  }

  public getPokemonRowById(pokemonId: PokemonId): Observable<PokemonRow | undefined> {
    return this.pokeapiRepository.getPokemonRowById(pokemonId).pipe(
      map(data => PokemonRow.fromDto(data))
    )
  }
}
