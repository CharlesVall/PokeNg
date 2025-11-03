import { Component, input } from '@angular/core';
import { PokemonDetails } from '@core/models';
import { PokemonStatsModule } from './pokemon-stats-module/pokemon-stats-module';
import { PokemonCardModule } from './pokemon-card-module/pokemon-card-module';
import { PokemonEvolutionModule } from './pokemon-evolution-module/pokemon-evolution-module';

@Component({
  selector: 'app-board-module',
  imports: [PokemonCardModule, PokemonStatsModule, PokemonEvolutionModule],
  templateUrl: './board-module.html',
  styleUrl: './board-module.scss'
})
export class BoardModule {
  public readonly moduleType = input.required<string>()
  public readonly pokemon = input.required<PokemonDetails>({ alias: 'pokemon' });
}
