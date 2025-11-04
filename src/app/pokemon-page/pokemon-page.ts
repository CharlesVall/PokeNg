import { Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';

import { ForwardBackButtonsLayout } from "./forward-back-buttons-layout/forward-back-buttons-layout";
import { PokemonPageState } from './page-state/pokemon-page-state';
import { PokemonId } from '@core/models/';
import { CommonModule } from '@angular/common';
import { EvolutionService } from '@core/services/evolution-service/evolution-service';
import { PokemonBoard } from './pokemon-board/pokemon-board';
import { FeaturePageHeader } from '@shared/components/feature-page-header/feature-page-header';

@Component({
  selector: 'app-pokemon-page',
  imports: [
    CommonModule, RouterLink,
    ButtonModule, SkeletonModule,
    ForwardBackButtonsLayout, PokemonBoard, FeaturePageHeader
    
],
  templateUrl: './pokemon-page.html',
  styleUrl: './pokemon-page.scss',
  providers: [PokemonPageState]
})
export class PokemonPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  protected readonly pokemonPageState = inject(PokemonPageState);

  private readonly routeParams = toSignal(this.route.params);
  protected requestedPokemonId = computed(() => Number(this.routeParams()?.['id'] ?? 0));

  public constructor() {
    effect(() => {
      const id = this.requestedPokemonId();
      if (PokemonId.isValid(id)) {
        this.pokemonPageState.loadPokemon(new PokemonId(id));
      } else {
        this.pokemonPageState.clearPokemon();
        this.router.navigateByUrl('page-not-found');
      }
    });
  }
}
