import { inject, Injectable } from '@angular/core';
import { PokeapiRepository } from '../pokeapi-repository/pokeapi-repository';
import { PokemonDetails } from '@core/models/PokemonDetails';
import { map, Observable } from 'rxjs';
import { PokemonWithUrlDto } from '@core/models/interfaces/PokemonWithUrlDto';
import { PokemonRow } from '@core/models/PokemonRow';
import { PokemonId } from '@core/models/PokemonId';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly pokeapiRepository = inject(PokeapiRepository);

  getAllPokemonUrls(): Observable<PokemonWithUrlDto[]> {
    return this.pokeapiRepository.getAllPokemonUrls()
  }

  getPokemonDetailsById(pokemonId: PokemonId): Observable<PokemonDetails> {
    return this.pokeapiRepository.getPokemonDetailsById(pokemonId).pipe(
      map(dto => PokemonDetails.fromDto(dto))
    )
  }
  
  getAllPokemonRows(): Observable<PokemonRow[]> {
    return this.pokeapiRepository.getAllPokemonRows().pipe(
      map(dtos => dtos.map(dto => PokemonRow.fromDto(dto)))
    );
  }

  getPokemonRowById(pokemonId: PokemonId): Observable<PokemonRow | undefined> {
    return this.pokeapiRepository.getPokemonRowById(pokemonId).pipe(
      map(dto => PokemonRow.fromDto(dto))
    )
  }
}
