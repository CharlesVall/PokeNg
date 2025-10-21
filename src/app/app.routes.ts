import { Routes } from '@angular/router';
import { PokemonHome } from './pokemon-home/pokemon-home';
import { PokemonPokedex } from './pokemon-pokedex/pokemon-pokedex';

export const routes: Routes = [
  { path: '', component: PokemonHome},
  { path: 'pokedex', component: PokemonPokedex},
  { path: 'pokemon/:id', 
    loadComponent: () => import('./pokemon-page/pokemon-page')
    .then(module => module.PokemonPage)
  },

];
