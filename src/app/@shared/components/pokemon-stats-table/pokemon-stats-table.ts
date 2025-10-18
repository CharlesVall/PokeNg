import { Component, input } from '@angular/core';
import { DisplayStatPipe } from '@shared/pipes';
import { PokemonDetails } from '@core/models/';

@Component({
  selector: 'app-pokemon-stats-table',
  imports: [DisplayStatPipe],
  templateUrl: './pokemon-stats-table.html',
  styleUrl: './pokemon-stats-table.scss'
})
export class PokemonStatsTable {
  public pokemon = input.required<PokemonDetails>();
}
