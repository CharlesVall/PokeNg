import { Component, input } from '@angular/core';
import { PokemonDetails } from '@core/models';
import { PokemonStatsTable } from '@shared/components/pokemon-stats-table/pokemon-stats-table';

@Component({
  selector: 'app-pokemon-stats-module',
  imports: [PokemonStatsTable],
  templateUrl: './pokemon-stats-module.html',
  styleUrl: './pokemon-stats-module.scss'
})
export class PokemonStatsModule {
  public readonly pokemon = input.required<PokemonDetails>({ alias: 'pokemon' });
}
