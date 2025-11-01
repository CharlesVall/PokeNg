import { inject, Injectable } from '@angular/core';
import { PokemonDetails } from '@core/models/pokemon-details';
import { map, Observable } from 'rxjs'
import { PokemonRow } from '@core/models/pokemon-row';
import { PokemonId } from '@core/models/pokemon-id';
import { PokemonRepository } from '../pokemon-repository/pokemon-repository';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly pokemonRepository = inject(PokemonRepository);

  public getPokemonDetailsById(pokemonId: PokemonId): Observable<PokemonDetails> {
    return this.pokemonRepository.getPokemonDetailsById(pokemonId).pipe(
      map(data => PokemonDetails.fromData(data))
    )
  }
  
  public getAllPokemonRows(): Observable<PokemonRow[]> {
    return this.pokemonRepository.getAllPokemonRows().pipe(
      map(dataList => dataList.map(data => PokemonRow.fromData(data)))
    );
  }

  public getPokemonRowById(pokemonId: PokemonId): Observable<PokemonRow | undefined> {
    return this.pokemonRepository.getPokemonRowById(pokemonId).pipe(
      map(data => PokemonRow.fromData(data))
    )
  }
}
