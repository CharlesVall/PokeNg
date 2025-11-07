import { Component } from '@angular/core';
import { PokemonList } from '@shared/components/pokemon-list/pokemon-list';

@Component({
  selector: 'app-pokemon-compare',
  imports: [PokemonList],
  templateUrl: './pokemon-compare.html',
  styleUrl: './pokemon-compare.scss'
})
export class PokemonCompare {

}
