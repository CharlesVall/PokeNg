import { Component, input } from '@angular/core';
import { PokemonStatsModule } from './pokemon-stats-module/pokemon-stats-module';
import { PokemonCardModule } from './pokemon-card-module/pokemon-card-module';
import { PokemonEvolutionModule } from './pokemon-evolution-module/pokemon-evolution-module';
import { PokemonFormModule } from './pokemon-form-module/pokemon-form-module';

@Component({
  selector: 'app-board-module',
  imports: [PokemonCardModule, PokemonStatsModule, PokemonEvolutionModule, PokemonFormModule],
  templateUrl: './board-module.html',
  styleUrl: './board-module.scss'
})
export class BoardModule {
  public readonly moduleType = input.required<string>()
}
