import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { PokemonAbilitiesDisplayer } from '@shared/components/pokemon-abilities-displayer/pokemon-abilities-displayer';
import { PokemonTypesDisplayer } from '@shared/components/pokemon-types-displayer/pokemon-types-displayer';
import { PokemonPipes } from '@shared/pipes';
import { BoardStateService } from '../../board-state-service/board-state-service';

@Component({
  selector: 'app-pokemon-card-module',
  imports: [
    CommonModule, NgOptimizedImage,
    PokemonTypesDisplayer, PokemonAbilitiesDisplayer, PokemonPipes],
  templateUrl: './pokemon-card-module.html',
  styleUrl: './pokemon-card-module.scss'
})
export class PokemonCardModule {
  private readonly boardStateService = inject(BoardStateService)
  protected readonly pokemon = this.boardStateService.currentPokemon
}
