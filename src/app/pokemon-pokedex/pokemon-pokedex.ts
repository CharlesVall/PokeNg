import { Component } from '@angular/core';
import { PokemonList } from '@shared/components/pokemon-list/pokemon-list';

@Component({
  selector: 'app-pokemon-pokedex',
  imports: [PokemonList],
  templateUrl: './pokemon-pokedex.html',
  styleUrl: './pokemon-pokedex.scss'
})
export class PokemonPokedex {
}