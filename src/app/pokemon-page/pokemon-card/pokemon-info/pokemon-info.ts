import { Component, input } from '@angular/core';

import { PokemonTypesDisplayer } from '@shared/components/pokemon-types-displayer/pokemon-types-displayer';
import { PokemonPipes } from '@shared/pipes';
import { PokemonDetails } from '@core/models/';

@Component({
  selector: 'app-pokemon-info',
  imports: [PokemonTypesDisplayer, PokemonPipes],
  templateUrl: './pokemon-info.html',
  styleUrl: './pokemon-info.scss'
})
export class PokemonInfo {
  public pokemon = input.required<PokemonDetails>();
}
