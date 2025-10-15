import { inject, Injectable } from '@angular/core';
import { PokeapiWrapper } from '../pokeapi-wrapper/pokeapi-wrapper';
import { PokemonDetails } from 'app/models/PokemonDetails';
import { Observable } from 'rxjs';
import { PokemonWithUrl } from 'app/models/PokemonWithUrl';
import { PokemonRow } from 'app/models/PokemonRow';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokeapiWrapper = inject(PokeapiWrapper);

  getAllPokemonUrls(): Observable<PokemonWithUrl[]> {
    return this.pokeapiWrapper.getAllPokemonUrls()
  }

  getPokemonDetailsById(pokemonId: Number): Observable<PokemonDetails> {
    return this.pokeapiWrapper.getPokemonDetailsById(pokemonId)
  }
  
  getAllPokemonRows(): Observable<PokemonRow[]> {
    return this.pokeapiWrapper.getAllPokemonRows()
  }

}
