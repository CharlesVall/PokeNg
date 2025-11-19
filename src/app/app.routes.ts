import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '',
    loadComponent: () => import('./pokemon-home/pokemon-home')
    .then(module => module.PokemonHome)
  },
  { path: 'pokemon',
    loadComponent: () => import('./pokemon-pokedex/pokemon-pokedex')
    .then(module => module.PokemonPokedex)
  },
  { path: 'pokemon/:id', 
    loadComponent: () => import('./pokemon-page/pokemon-page')
    .then(module => module.PokemonPage)
  },
  { path: 'compare',
    loadComponent: () => import('./pokemon-compare/pokemon-compare')
    .then(module => module.PokemonCompare)
  },
  { path: '**',
    loadComponent: () => import('./page-not-found/page-not-found')
    .then(module => module.PageNotFound)
  }
];
