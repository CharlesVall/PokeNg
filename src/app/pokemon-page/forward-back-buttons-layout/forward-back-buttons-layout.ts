import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from "primeng/button";
import { PokemonPageState } from '../page-state/pokemon-page-state';
import { PokemonService } from '@core/services/pokemon-service/pokemon.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { PokemonId } from '@core/models/PokemonId';

@Component({
  selector: 'app-forward-back-buttons-layout',
  imports: [ButtonModule, RouterLink],
  templateUrl: './forward-back-buttons-layout.html',
  styleUrl: './forward-back-buttons-layout.scss'
})
export class ForwardBackButtonsLayout {
  private pokemonPageState = inject(PokemonPageState);
  private pokemonService = inject(PokemonService);

  public currentPokemon = computed(() => this.pokemonPageState.currentPokemon());
  
  private previousPokemonId = computed(() => {
    const currentPokemon = this.currentPokemon();
    if (!currentPokemon) return new PokemonId(1025);
    return currentPokemon.id.previous();
  });
  
  private nextPokemonId = computed(() => {
    const currentPokemon = this.currentPokemon();
    if (!currentPokemon) return new PokemonId(1);
    return currentPokemon.id.next();
  });

  public previousPokemon = toSignal(
    toObservable(this.previousPokemonId).pipe(
      switchMap(id => this.pokemonService.getPokemonRowById(id))
    ),
    { initialValue: null }
  );

  public nextPokemon = toSignal(
    toObservable(this.nextPokemonId).pipe(
      switchMap(id => this.pokemonService.getPokemonRowById(id))
    ),
    { initialValue: null }
  );
}