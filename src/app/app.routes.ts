import { Routes } from '@angular/router';
import { PokemonList } from './pokemon-list/pokemon-list';

export const routes: Routes = [
  { path: '', component: PokemonList},
  { path: 'pokemon/:id', 
    loadComponent: () => import('./pokemon-page/pokemon-page')
    .then(module => module.PokemonPage)
  },

];
