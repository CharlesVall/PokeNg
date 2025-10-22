import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';

import { PokemonPipes } from '@shared/pipes';
import { PokemonTypesDisplayer } from '@shared/components/pokemon-types-displayer/pokemon-types-displayer';
import { PokemonService } from '@core/services/pokemon-service/pokemon.service';
import { PokemonId } from '@core/models/pokemon-id';

@Component({
  selector: 'app-pokemon-list',
  imports: [CommonModule, TableModule, SkeletonModule, PokemonPipes, PokemonTypesDisplayer, NgOptimizedImage],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.scss'
})
export class PokemonList implements OnInit {
  private readonly pokemonService = inject(PokemonService);
  private readonly router = inject(Router)

  protected readonly pokemonDetails$ = this.pokemonService.getAllPokemonRows();
  
  protected traveToPokemonDetailsPage(pokemonId: PokemonId) {
    this.router.navigate(['/pokemon', pokemonId.value]);
  }

  public ngOnInit(): void {
    const input = document.querySelectorAll("input")
    if (input) {
      console.log(input)
      input.forEach(input => input.style.width = "100%")
    }
  }
}
