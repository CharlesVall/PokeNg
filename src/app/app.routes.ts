import { Routes } from '@angular/router';
import { PokemonList } from '@features/pokemon-list/pokemon-list';

export const routes: Routes = [
  { path: '', component: PokemonList},
  { path: 'pokemon/:id', 
    loadComponent: () => import('@features/pokemon-page/pokemon-page')
    .then(module => module.PokemonPage)
  },

];
