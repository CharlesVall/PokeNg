import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonPageState } from './page-state/pokemon-page-state';
import { PokemonCard } from './pokemon-card/pokemon-card';
import { ButtonModule } from 'primeng/button';
import { SkeletonModule } from 'primeng/skeleton';
import { ForwardBackButtonsLayout } from "./forward-back-buttons-layout/forward-back-buttons-layout";

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [ButtonModule, SkeletonModule, PokemonCard, ForwardBackButtonsLayout],
  templateUrl: './pokemon-page.html',
  styleUrl: './pokemon-page.scss'
})
export class PokemonPage implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  pokemonPageState = inject(PokemonPageState);
  
  private routeSubscription?: Subscription;

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      const pokemonId = Number(params['id']);
  
      if (pokemonId && pokemonId > 0) {
        this.pokemonPageState.loadPokemon(pokemonId);
      }
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    
    this.pokemonPageState.clearPokemon();
  }

  returnToPokemonList(): void {  
    this.router.navigateByUrl('');
  }
}