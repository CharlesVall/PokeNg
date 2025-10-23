import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';

import { PokemonPipes } from '@shared/pipes';
import { PokemonTypesDisplayer } from '@shared/components/pokemon-types-displayer/pokemon-types-displayer';
import { PokemonService } from '@core/services/pokemon-service/pokemon.service';
import { PokemonId } from '@core/models/pokemon-id';
import { InputFilter } from './input-filter/input-filter';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, TableModule, SkeletonModule, PokemonPipes, PokemonTypesDisplayer, NgOptimizedImage, InputFilter],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss'
})
export class PokemonList {
  private readonly pokemonService = inject(PokemonService);
  private readonly router = inject(Router)

  protected readonly pokemonDetails$ = this.pokemonService.getAllPokemonRows();
  
  protected traveToPokemonDetailsPage(pokemonId: PokemonId) {
    this.router.navigate(['/pokemon', pokemonId.value]);
  }
}
