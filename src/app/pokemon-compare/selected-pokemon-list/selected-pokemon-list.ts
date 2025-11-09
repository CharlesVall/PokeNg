import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CompareDataService } from '../compare-data-service/compare-data-service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PokemonPipes } from '@shared/pipes';

@Component({
  selector: 'app-selected-pokemon-list',
  imports: [CommonModule, TableModule, NgOptimizedImage, PokemonPipes],
  templateUrl: './selected-pokemon-list.html',
  styleUrl: './selected-pokemon-list.scss'
})
export class SelectedPokemonList {
  private readonly compareDataService = inject(CompareDataService)

  protected readonly selectedPokemonDetailsList$ = this.compareDataService.getSelectedPokemonDetailsList()
} 
