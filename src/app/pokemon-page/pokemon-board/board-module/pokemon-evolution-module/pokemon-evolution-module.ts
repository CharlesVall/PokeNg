import { Component, inject } from '@angular/core';
import { BoardStateService } from '../../board-state-service/board-state-service';

@Component({
  selector: 'app-pokemon-evolution-module',
  imports: [],
  templateUrl: './pokemon-evolution-module.html',
  styleUrl: './pokemon-evolution-module.scss'
})
export class PokemonEvolutionModule {
  private readonly boardStateService = inject(BoardStateService)
  protected readonly pokemon = this.boardStateService.currentPokemon
  
}
