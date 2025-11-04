import { Component, inject } from '@angular/core';
import { IndexServices } from './index-services/index-services';
import { BoardStateService } from '../../board-state-service/board-state-service';

@Component({
  selector: 'app-pokemon-index-module',
  imports: [],
  templateUrl: './pokemon-index-module.html',
  styleUrl: './pokemon-index-module.scss',
  providers: [IndexServices]
})
export class PokemonIndexModule {
  public readonly indexService = inject(IndexServices)
  private readonly boardStateService = inject(BoardStateService)

  private readonly pokemon = this.boardStateService.currentPokemon
}
