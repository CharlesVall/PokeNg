import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-pokemon-types-displayer',
  imports: [CommonModule, TooltipModule],
  templateUrl: './pokemon-types-displayer.html',
  styleUrl: './pokemon-types-displayer.scss'
})
export class PokemonTypesDisplayer {
  public readonly types = input.required<string[]>();
}
