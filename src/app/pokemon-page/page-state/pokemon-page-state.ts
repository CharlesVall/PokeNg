import { inject, Injectable, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { PokemonService } from '@core/services/pokemon-service/pokemon.service';
import { PokemonDetails } from '@core/models/';
import { PokemonId } from '@core/models/PokemonId';

@Injectable({
  providedIn: 'root'
})
export class PokemonPageState {
  private pokemonService = inject(PokemonService);

  private _currentPokemon = signal<PokemonDetails | null>(null);
  private _loading = signal<boolean>(false);
  private _error = signal<string | null>(null);
  
  public readonly currentPokemon = this._currentPokemon.asReadonly();
  public readonly loading = this._loading.asReadonly();
  public readonly error = this._error.asReadonly();

  public async loadPokemon(pokemonId: PokemonId) {
    this._loading.set(true);
    this._error.set(null);

    try {
      const pokemon = await firstValueFrom(
        this.pokemonService.getPokemonDetailsById(pokemonId)
      );
      this._currentPokemon.set(pokemon);
    } catch (error) {
      this._error.set('Erreur de chargement');
    } finally {
      this._loading.set(false);
    }
  }
  
  public clearPokemon(): void {
    this._currentPokemon.set(null);
    this._error.set(null);
    this._loading.set(false);
  }
}
