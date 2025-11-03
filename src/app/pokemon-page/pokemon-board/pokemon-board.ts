import { Component, input } from '@angular/core';
import { PokemonDetails } from '@core/models';
import { BoardModule } from './board-module/board-module';

@Component({
  selector: 'app-pokemon-board',
  imports: [BoardModule],
  templateUrl: './pokemon-board.html',
  styleUrl: './pokemon-board.scss'
})
export class PokemonBoard {
  public readonly pokemon = input.required<PokemonDetails>({ alias: 'pokemon' });
}
