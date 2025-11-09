import { computed, Injectable, signal } from '@angular/core';
import { PokemonId } from '@core/models';

@Injectable()
export class SelectedPokemonService {
  public readonly selectedIds = signal<Map<PokemonId, boolean>>(new Map());

  public readonly selectedIdsList = computed(() =>
    Array.from(this.selectedIds().entries())
      .filter(([_, selected]) => selected)
      .map(([id]) => id)  
  );

  public toggle(pokemonId: PokemonId): void {
    const newMap = new Map(this.selectedIds());
    newMap.set(pokemonId, !(newMap.get(pokemonId) ?? false));
    this.selectedIds.set(newMap);
  }

  public set(pokemonId: PokemonId, checked: boolean): void {
    const newMap = new Map(this.selectedIds());
    newMap.set(pokemonId, checked);
    this.selectedIds.set(newMap);
  }

  public isSelected(pokemonId: PokemonId): boolean {
    return this.selectedIds().get(pokemonId) ?? false;
  }
}
