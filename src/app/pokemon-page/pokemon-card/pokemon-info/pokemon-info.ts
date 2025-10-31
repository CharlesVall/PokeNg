import { Component, input } from '@angular/core';

import { PokemonTypesDisplayer } from '@shared/components/pokemon-types-displayer/pokemon-types-displayer';
import { PokemonPipes } from '@shared/pipes';
import { PokemonDetails } from '@core/models/';
import { PokemonAbilitiesDisplayer } from '@shared/components/pokemon-abilities-displayer/pokemon-abilities-displayer';

@Component({
  selector: 'app-pokemon-info',
  imports: [PokemonTypesDisplayer, PokemonAbilitiesDisplayer, PokemonPipes],
  templateUrl: './pokemon-info.html',
  styleUrl: './pokemon-info.scss'
})
export class PokemonInfo {
  public readonly pokemon = input.required<PokemonDetails>();
}
