import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';

import { PokemonPipes } from '@shared/pipes';
import { PokemonTypesDisplayer } from '@shared/components/pokemon-types-displayer/pokemon-types-displayer';
import { PokemonService } from '@core/services/pokemon-service/pokemon.service';
import { PokemonId } from '@core/models/PokemonId';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, TableModule, SkeletonModule, PokemonPipes, PokemonTypesDisplayer, NgOptimizedImage],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss'
})
export class PokemonList {
  private pokemonService = inject(PokemonService);
  private router = inject(Router)

  public pokemonDetails$ = this.pokemonService.getAllPokemonRows();
  
  public traveToPokemonDetailsPage(pokemonId: PokemonId) {
    this.router.navigate(['/pokemon', pokemonId.value]);
  }
}
