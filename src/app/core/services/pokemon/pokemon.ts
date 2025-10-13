import { inject, Injectable } from '@angular/core';
import { PokeapiWrapper } from '../pokeapi-wrapper/pokeapi-wrapper';
import { PokemonDetails } from 'app/models/PokemonDetails';
import { Observable } from 'rxjs';
import { PokemonByUrl } from 'app/models/PokemonByUrl';
import { PokemonRow } from 'app/models/PokemonRow';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokeapiWrapper = inject(PokeapiWrapper);

  getAllPokemon(): Observable<PokemonByUrl[]> {
    return this.pokeapiWrapper.getAllPokemon()
  }

  getAllPokemonDetails(): Observable<PokemonRow[]> {
    return this.pokeapiWrapper.getAllPokemonDetails()
  }
}
