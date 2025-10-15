import { Component, input, Signal } from '@angular/core';
import { DisplayStatPipe } from '@shared/pipes';
import { PokemonDetails } from 'app/models/PokemonDetails';

@Component({
  selector: 'app-pokemon-stats-table',
  imports: [DisplayStatPipe],
  templateUrl: './pokemon-stats-table.html',
  styleUrl: './pokemon-stats-table.scss'
})
export class PokemonStatsTable {
  pokemon = input.required<PokemonDetails>();
}
