import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TableModule } from 'primeng/table';
import { TypeDisplayer } from '@shared/components/type-displayer/type-displayer';
import { PokemonPipes } from '@shared/pipes';

import { Component, inject } from '@angular/core';
import { PokemonService } from '@core/services/pokemon/pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, TableModule, TypeDisplayer, PokemonPipes, NgOptimizedImage],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss'
})
export class PokemonList {
  private pokemonService = inject(PokemonService);
  private router = inject(Router)

  pokemonDetails$ = this.pokemonService.getAllPokemonRows().pipe();
  
  traveToPokemonDetailsPage(pokemonId: Number) {  
    this.router.navigate(['/pokemon', pokemonId]);
  }
}
