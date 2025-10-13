import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', 
      loadComponent: () => import('@features/pokemon-list/pokemon-list')
      .then(m => m.PokemonList)
    }
];
