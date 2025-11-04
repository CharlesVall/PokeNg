import { inject, Injectable } from '@angular/core';
import { PokemonPageState } from 'app/pokemon-page/page-state/pokemon-page-state';

@Injectable()
export class BoardStateService {
  private readonly pokemonPageState = inject(PokemonPageState)
  
  public readonly currentPokemon = this.pokemonPageState.currentPokemon
}
