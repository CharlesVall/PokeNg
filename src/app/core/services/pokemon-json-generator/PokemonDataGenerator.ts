import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of, throwError } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { PokemonDetails } from 'app/models/PokemonDetails';
import * as pokeApi from '../pokemon/pokemon';

interface PokemonByUrl {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonDataGeneratorService {
  private http = inject(HttpClient);
  private allPokemonsCache$?: Observable<PokemonDetails[]>;


  private fetchPokemonByUrl(pokemonUrl: String, http: HttpClient): Observable<any> {
    return http.get(`${pokemonUrl}`)/**
   * Récupère la liste initiale des Pokémon (noms + URLs)
   */
  }

  private getAllPokemon(): Observable<PokemonByUrl[]> {
    return this.http.get<{ results: PokemonByUrl[] }>(
      'https://pokeapi.co/api/v2/pokemon?limit=1025'
    ).pipe(
      map(response => response.results)
    );
  }

  /**
   * Filtre les données pour ne garder que les champs nécessaires
   */
  private filterPokemonData(pokemon: PokemonDetails): any {
    return {
      id: pokemon.id,
      name: pokemon.name,
      abilities: pokemon.abilities,
      types: pokemon.types,
      sprites: pokemon.sprites
    };
  }

  /**
   * Récupère tous les détails des Pokémon depuis l'API
   */
  private getAllPokemonDetailsFromAPI(): Observable<PokemonDetails[]> {
    if (!this.allPokemonsCache$) {
      this.allPokemonsCache$ = this.getAllPokemon().pipe(
        switchMap(items => {
          if (items.length === 0) return of([]);

          console.log(`📡 Récupération de ${items.length} Pokémon...`);
          
          const requests = items.map(item =>
            this.fetchPokemonByUrl(item.url, this.http).pipe(
              map(pokemon => this.filterPokemonData(pokemon))
            )
          );

          return forkJoin(requests);
        }),
        catchError(err => {
          this.allPokemonsCache$ = undefined;
          return throwError(() => err);
        })
      );
    }
    return this.allPokemonsCache$;
  }

  /**
   * Génère et télécharge le fichier JSON contenant tous les détails des Pokémon
   */
  generateAndDownloadJson(): void {
    console.log('🔄 Début de la génération des données...');
    
    this.getAllPokemonDetailsFromAPI().subscribe({
      next: (data: PokemonDetails[]) => {
        console.log(`✅ ${data.length} Pokémon récupérés`);
        this.downloadAsJson(data, 'pokemon-data.json');
        console.log('💾 Fichier téléchargé avec succès !');
      },
      error: (error) => {
        console.error('❌ Erreur lors de la génération:', error);
      }
    });
  }

  /**
   * Affiche les données dans la console pour copier-coller manuel
   */
  generateAndLogJson(): void {
    console.log('🔄 Génération des données...');
    
    this.getAllPokemonDetailsFromAPI().subscribe({
      next: (data: PokemonDetails[]) => {
        console.log(`✅ ${data.length} Pokémon récupérés`);
        console.log('=== COPIEZ CE JSON DANS public/pokemon-data.json ===');
        console.log(JSON.stringify(data, null, 2));
        console.log('=== FIN DU JSON ===');
      },
      error: (error) => {
        console.error('❌ Erreur lors de la génération:', error);
      }
    });
  }

  /**
   * Télécharge les données en tant que fichier JSON
   */
  private downloadAsJson(data: any, filename: string): void {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    
    // Nettoyer l'URL temporaire
    window.URL.revokeObjectURL(url);
  }
}