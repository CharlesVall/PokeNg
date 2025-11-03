import { Component } from '@angular/core';
import { FeaturePageHeader } from '@shared/components/feature-page-header/feature-page-header';
import { PokemonList } from '@shared/components/pokemon-list/pokemon-list';

@Component({
  selector: 'app-pokemon-pokedex',
  imports: [PokemonList, FeaturePageHeader],
  templateUrl: './pokemon-pokedex.html',
  styleUrl: './pokemon-pokedex.scss'
})
export class PokemonPokedex {
}