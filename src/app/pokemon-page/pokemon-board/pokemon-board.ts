import { Component, inject, input } from '@angular/core';
import { BoardModule } from './board-module/board-module';
import { BoardStateService } from './board-state-service/board-state-service';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-pokemon-board',
  imports: [SkeletonModule, BoardModule],
  templateUrl: './pokemon-board.html',
  styleUrl: './pokemon-board.scss',
  providers: [BoardStateService]
})
export class PokemonBoard {
  private readonly boardStateService = inject(BoardStateService)
  public readonly isSkeleton = input<boolean>()
}
