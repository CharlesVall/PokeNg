import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TypeDisplayer } from '@shared/components/type-displayer/type-displayer';
import { PokemonPipes } from '@shared/pipes';

import { Component, inject } from '@angular/core';
import { PokemonService } from '@core/services/pokemon/pokemon';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, TableModule, TypeDisplayer, PokemonPipes],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss'
})
export class PokemonList {
  private pokemonService = inject(PokemonService);

  pokemonDetails$ = this.pokemonService.getAllPokemonDetails().pipe();
}
