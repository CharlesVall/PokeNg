import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

import { CardModule } from 'primeng/card';

import { PokemonDetails } from '@core/models';
import { PokemonStatsTable } from '../../@shared/components/pokemon-stats-table/pokemon-stats-table';
import { PokemonInfo } from "./pokemon-info/pokemon-info";

@Component({
  selector: 'app-pokemon-card',
  imports: [CommonModule, CardModule, PokemonStatsTable, PokemonInfo, NgOptimizedImage],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.scss'
})
export class PokemonCard {
  public pokemon = input.required<PokemonDetails>({ alias: 'pokemon' });
}
