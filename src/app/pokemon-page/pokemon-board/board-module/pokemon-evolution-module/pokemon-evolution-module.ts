import { Component, input } from '@angular/core';
import { PokemonDetails } from '@core/models';

@Component({
  selector: 'app-pokemon-evolution-module',
  imports: [],
  templateUrl: './pokemon-evolution-module.html',
  styleUrl: './pokemon-evolution-module.scss'
})
export class PokemonEvolutionModule {
  public readonly pokemon = input.required<PokemonDetails>({ alias: 'pokemon' });
}
