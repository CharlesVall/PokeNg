import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { PokemonPageState } from '../page-state/pokemon-page-state';

@Component({
  selector: 'app-forward-back-buttons-layout',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './forward-back-buttons-layout.html',
  styleUrl: './forward-back-buttons-layout.scss'
})
export class ForwardBackButtonsLayout {
  private pokemonPageState = inject(PokemonPageState);
  private router = inject(Router);

  private readonly MIN_POKEMON_ID = 1;
  private readonly MAX_POKEMON_ID = 1000; // 1025

  nextPokemon(): void {
    const currentPokemon = this.pokemonPageState.currentPokemon();
    
    if (!currentPokemon) return;
    
    const nextId = currentPokemon.id + 1;
    
    if (nextId > this.MAX_POKEMON_ID) return;
    
    this.pokemonPageState.loadPokemon(nextId);
    this.router.navigate(['/pokemon', nextId]);
  }
  
  previousPokemon(): void {
    const currentPokemon = this.pokemonPageState.currentPokemon();
    
    if (!currentPokemon) return;
    
    const previousId = currentPokemon.id - 1;
    
    if (previousId < this.MIN_POKEMON_ID) return;
    
    this.pokemonPageState.loadPokemon(previousId);
    this.router.navigate(['/pokemon', previousId]);
  }
}