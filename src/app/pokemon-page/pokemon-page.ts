import { Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';

import { ForwardBackButtonsLayout } from "./forward-back-buttons-layout/forward-back-buttons-layout";
import { PokemonPageState } from './page-state/pokemon-page-state';
import { PokemonCard } from './pokemon-card/pokemon-card';
import { PokemonId } from '@core/models/';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-page',
  imports: [
    CommonModule, ButtonModule, SkeletonModule,
    ForwardBackButtonsLayout, PokemonCard,
    RouterLink
],
  templateUrl: './pokemon-page.html',
  styleUrl: './pokemon-page.scss',
  providers: [PokemonPageState]
})
export class PokemonPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  public readonly pokemonPageState = inject(PokemonPageState);

  private readonly routeParams = toSignal(this.route.params);
  protected pokemonId = computed(() => Number(this.routeParams()?.['id'] ?? 0));

  public constructor() {
    effect(() => {
      const id = this.pokemonId();
      if (PokemonId.isValid(id)) {
        this.pokemonPageState.loadPokemon(new PokemonId(id));
      } else {
        this.pokemonPageState.clearPokemon();
        this.router.navigateByUrl('page-not-found');
      }
    });
  }

  protected returnToPokemonList(): void {
    this.router.navigateByUrl('pokedex');
  }
}
