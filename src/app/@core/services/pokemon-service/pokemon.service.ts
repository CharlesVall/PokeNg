import { inject, Injectable } from '@angular/core';
import { PokemonDetails } from '@core/models/pokemon-details';
import { map, Observable } from 'rxjs'
import { PokemonRow } from '@core/models/pokemon-row';
import { PokemonId } from '@core/models/pokemon-id';
import { hardCache } from '@paddls/rxjs-common';
import { PokemonRepository } from '../pokemon-repository/pokemon-repository';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly pokemonRepository = inject(PokemonRepository);

  public getPokemonDetailsById(pokemonId: PokemonId): Observable<PokemonDetails> {
    return this.pokemonRepository.getPokemonDetailsById(pokemonId).pipe(
      map(data => PokemonDetails.fromDto(data))
    )
  }
  
  public getAllPokemonRows(): Observable<PokemonRow[]> {
    return this.pokemonRepository.getAllPokemonRows().pipe(
      map(
        pokemonListData => pokemonListData.map(data => PokemonRow.fromDto(data))
      ),
      hardCache()
    );
  }

  public getPokemonRowById(pokemonId: PokemonId): Observable<PokemonRow | undefined> {
    return this.pokemonRepository.getPokemonRowById(pokemonId).pipe(
      map(data => PokemonRow.fromDto(data))
    )
  }
}
