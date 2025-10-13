import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeapiWrapper } from '@core/services/pokeapi-wrapper/pokeapi-wrapper';
import { AsyncPipe } from '@angular/common';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-pokemon-test',
  imports: [CommonModule, AsyncPipe, ButtonModule],
  templateUrl: './pokemon-test.html',
  styleUrl: './pokemon-test.scss'
})
export class PokemonTest {
  private readonly pokeapiWrapper = inject(PokeapiWrapper);

  pokemons$ = this.pokeapiWrapper.getAllPokemon();
  bulbizarre$ = this.pokeapiWrapper.getPokemonById(1);
}
