import { Component } from '@angular/core';
import { FeaturePageHeader } from '@shared/components/feature-page-header/feature-page-header';
import { PokemonList } from '@shared/components/pokemon-list/pokemon-list';
import { SelectedPokemonList } from './selected-pokemon-list/selected-pokemon-list';
import { CompareDataService } from './compare-data-service/compare-data-service';
import { SelectedPokemonService } from '../@shared/components/pokemon-list/services/selected-pokemon-service/selected-pokemon-service';
import { CompareStatsGraph } from './compare-stats-graph/compare-stats-graph';

@Component({
  selector: 'app-pokemon-compare',
  imports: [
    PokemonList, FeaturePageHeader,
    SelectedPokemonList, CompareStatsGraph
  ],
  templateUrl: './pokemon-compare.html',
  styleUrl: './pokemon-compare.scss',
  providers: [SelectedPokemonService, CompareDataService]
})
export class PokemonCompare {
}
