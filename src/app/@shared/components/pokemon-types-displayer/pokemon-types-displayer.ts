import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pokemon-types-displayer',
  imports: [CommonModule],
  templateUrl: './pokemon-types-displayer.html',
  styleUrl: './pokemon-types-displayer.scss'
})
export class PokemonTypesDisplayer {
  public types = input.required<string[]>();
}
