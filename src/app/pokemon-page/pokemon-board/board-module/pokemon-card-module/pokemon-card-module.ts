import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { PokemonDetails } from '@core/models';
import { PokemonAbilitiesDisplayer } from '@shared/components/pokemon-abilities-displayer/pokemon-abilities-displayer';
import { PokemonTypesDisplayer } from '@shared/components/pokemon-types-displayer/pokemon-types-displayer';
import { PokemonPipes } from '@shared/pipes';

@Component({
  selector: 'app-pokemon-card-module',
  imports: [
    CommonModule, NgOptimizedImage,
    PokemonTypesDisplayer, PokemonAbilitiesDisplayer, PokemonPipes],
  templateUrl: './pokemon-card-module.html',
  styleUrl: './pokemon-card-module.scss'
})
export class PokemonCardModule {
  public readonly pokemon = input.required<PokemonDetails>({ alias: 'pokemon' });
}
