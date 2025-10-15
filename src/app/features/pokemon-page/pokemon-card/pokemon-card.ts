import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { PokemonDetails } from 'app/models/PokemonDetails';
import { CardModule } from 'primeng/card';
import { PokemonStatsTable } from './pokemon-stats-table/pokemon-stats-table';
import { PokemonInfo } from "./pokemon-info/pokemon-info";

@Component({
  selector: 'app-pokemon-card',
  imports: [CommonModule, CardModule, PokemonStatsTable, PokemonInfo, NgOptimizedImage],
  templateUrl: './pokemon-card.html',
  styleUrl: './pokemon-card.scss'
})
export class PokemonCard {
  pokemon = input.required<PokemonDetails>({ alias: 'pokemon' });
}
