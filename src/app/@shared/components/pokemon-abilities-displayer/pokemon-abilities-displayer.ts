import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Tooltip } from "primeng/tooltip";
import { AbilityDescription } from './ability-description/ability-description';

@Component({
  selector: 'app-pokemon-abilities-displayer',
  imports: [CommonModule, Tooltip, AbilityDescription],
  templateUrl: './pokemon-abilities-displayer.html',
  styleUrl: './pokemon-abilities-displayer.scss'
})
export class PokemonAbilitiesDisplayer {
  public readonly abilities = input.required<string[]>()
  public readonly displayAsList = input<boolean>(false)
}
