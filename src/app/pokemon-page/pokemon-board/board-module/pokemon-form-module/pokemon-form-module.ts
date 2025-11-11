import { Component, computed, inject } from '@angular/core';
import { PokemonFormService } from './pokemon-form-service/pokemon-form-service';
import { BoardStateService } from '../../board-state-service/board-state-service';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-pokemon-form-module',
  imports: [CommonModule],
  templateUrl: './pokemon-form-module.html',
  styleUrl: './pokemon-form-module.scss',
  providers: [PokemonFormService]
})
export class PokemonFormModule {
  private readonly pokemonFormService = inject(PokemonFormService)
  private readonly boardStateService = inject(BoardStateService)

  private readonly currentPokemon = this.boardStateService.currentPokemon

  protected readonly pokemonFormList = computed(() => {
    const current = this.currentPokemon();
    return current ? this.pokemonFormService.getFormDetailsList(current.id) : of([]);
  });
}

