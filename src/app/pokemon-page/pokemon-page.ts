import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';

import { ForwardBackButtonsLayout } from "./forward-back-buttons-layout/forward-back-buttons-layout";
import { PokemonPageState } from './page-state/pokemon-page-state';
import { PokemonCard } from './pokemon-card/pokemon-card';
import { PokemonId } from '@core/models/';

@Component({
  selector: 'app-pokemon-page',
  imports: [ButtonModule, SkeletonModule, ForwardBackButtonsLayout, PokemonCard],
  templateUrl: './pokemon-page.html',
  styleUrl: './pokemon-page.scss'
})
export class PokemonPage implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public pokemonPageState = inject(PokemonPageState);
  
  private routeSubscription?: Subscription;

  public ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const pokemonId = Number(params['id']);
  
      if (pokemonId && pokemonId > 0) {
        this.pokemonPageState.loadPokemon(new PokemonId(pokemonId));
      }
    });
  }

  public ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    
    this.pokemonPageState.clearPokemon();
  }

  protected returnToPokemonList(): void {  
    this.router.navigateByUrl('');
  }
}