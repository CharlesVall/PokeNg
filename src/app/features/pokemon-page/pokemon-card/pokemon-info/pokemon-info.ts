import { Component, input } from '@angular/core';
import { TypeDisplayer } from '@shared/components/type-displayer/type-displayer';
import { DisplayAbilitiesPipe, DisplayTypesPipe } from '@shared/pipes';
import { PokemonDetails } from 'app/models/PokemonDetails';

@Component({
  selector: 'app-pokemon-info',
  imports: [TypeDisplayer, DisplayTypesPipe, DisplayAbilitiesPipe],
  templateUrl: './pokemon-info.html',
  styleUrl: './pokemon-info.scss'
})
export class PokemonInfo {
  pokemon = input.required<PokemonDetails>();
}
