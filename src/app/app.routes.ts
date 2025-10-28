import { Routes } from '@angular/router';
import { PokemonHome } from './pokemon-home/pokemon-home';
import { PokemonCompare } from './pokemon-compare/pokemon-compare';
import { PokemonPokedex } from './pokemon-pokedex/pokemon-pokedex';

export const routes: Routes = [
  { path: '', component: PokemonHome},
  { path: 'pokedex', component: PokemonPokedex},
  { path: 'compare', component: PokemonCompare},
  { path: 'pokemon/:id', 
    loadComponent: () => import('./pokemon-page/pokemon-page')
    .then(module => module.PokemonPage)
  },
  { path: '**',
    loadComponent: () => import('./page-not-found/page-not-found')
    .then(m => m.PageNotFound)
  }
];
