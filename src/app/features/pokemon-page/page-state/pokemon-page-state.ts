import { inject, Injectable, signal, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '@core/services/pokemon/pokemon';
import { PokemonDetails } from 'app/models/PokemonDetails';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonPageState {
  private route = inject(ActivatedRoute);
  private pokemonService = inject(PokemonService);


  private _currentPokemon = signal<PokemonDetails | null>(null);
  private _loading = signal<boolean>(false);
  private _error = signal<string | null>(null);
  
  readonly currentPokemon = this._currentPokemon.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  async loadPokemon(pokemonId: number) {
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
  
  clearPokemon(): void {
    this._currentPokemon.set(null);
    this._error.set(null);
    this._loading.set(false);
  }
}
