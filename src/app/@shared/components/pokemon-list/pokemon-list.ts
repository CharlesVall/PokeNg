import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';

import { PokemonPipes } from '@shared/pipes';
import { PokemonTypesDisplayer } from '@shared/components/pokemon-types-displayer/pokemon-types-displayer';
import { PokemonId } from '@core/models/pokemon-id';
import { InputFilter } from './input-filter/input-filter';
import { ListDataService } from './list-data-service/list-data-service';
import { FilterStateService } from './filter-state-service/filter-state-service';
import { FilterStrategyService } from './filter-strategy-service/filter-strategy-service';


@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, TableModule, SkeletonModule, PokemonPipes, PokemonTypesDisplayer, NgOptimizedImage, InputFilter],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
  providers: [ListDataService, FilterStrategyService, FilterStateService]
})
export class PokemonList implements OnInit {
  private readonly router = inject(Router)
  private readonly listDataService = inject(ListDataService);
  protected readonly filterStateService = inject(FilterStateService)

  protected readonly pokemonRowData$ = this.listDataService.filteredPokemons$;
  
  protected traveToPokemonDetailsPage(pokemonId: PokemonId) {
    this.router.navigate(['/pokemon', pokemonId.value]);
  }

  ngOnInit(): void {
  }
}
