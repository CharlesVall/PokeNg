import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

import { PokemonPipes } from '@shared/pipes';
import { PokemonTypesDisplayer } from '@shared/components/pokemon-types-displayer/pokemon-types-displayer';
import { PokemonId } from '@core/models/pokemon-id';
import { ListDataService } from './services/list-data-service/list-data-service';
import { FilterStateService } from './services/filter-state-service/filter-state-service';
import { FilterStrategyService } from './services/filter-strategy-service/filter-strategy-service';
import { PokemonAbilitiesDisplayer } from '../pokemon-abilities-displayer/pokemon-abilities-displayer';
import { SortEvent } from 'primeng/api';
import { SortStrategiesService } from './services/sort-strategies-serviec/sort-strategies-service';


@Component({
  selector: 'app-pokemon-list',
  imports: [
    CommonModule, TableModule, SkeletonModule, MultiSelectModule,
    PokemonPipes, PokemonTypesDisplayer, PokemonAbilitiesDisplayer,
    NgOptimizedImage, ReactiveFormsModule, InputTextModule
  ],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss',
  providers: [ListDataService, FilterStrategyService, FilterStateService]
})
export class PokemonList {
  private readonly router = inject(Router)
  private readonly listDataService = inject(ListDataService);
  private readonly sortStrategiesService = inject(SortStrategiesService)
  protected readonly filterStateService = inject(FilterStateService)

  public readonly scrollHeight = input.required<string>()
  protected readonly pokemonRowData$ = this.listDataService.filteredPokemons$;
  
  protected traveToPokemonDetailsPage(pokemonId: PokemonId) {
    this.router.navigate(['/pokemon', pokemonId.value]);
  }

  public customSort(event: SortEvent) {
    if (!event.field || !event.data || !event.order) return;
    this.sortStrategiesService.sortData(event.data, event.field, event.order as 1 | -1);
  }

}
