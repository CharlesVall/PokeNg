import { Component, inject } from '@angular/core';
import { PokemonStatsTable } from '@shared/components/pokemon-stats-table/pokemon-stats-table';
import { BoardStateService } from '../../board-state-service/board-state-service';

@Component({
  selector: 'app-pokemon-stats-module',
  imports: [PokemonStatsTable],
  templateUrl: './pokemon-stats-module.html',
  styleUrl: './pokemon-stats-module.scss'
})
export class PokemonStatsModule {
  private readonly boardStateService = inject(BoardStateService)
  protected readonly pokemon = this.boardStateService.currentPokemon
}
