import { Injectable } from '@angular/core';
import { PokemonRow } from '@core/models';
import { FilterCriteria } from '@core/models'; 

@Injectable()
export class FilterStrategyService {
  
  public applyFilters(pokemons: PokemonRow[], criteria: FilterCriteria): PokemonRow[] {
    return pokemons
      .filter(pokemon => this.matchesId(pokemon, criteria.id))
      .filter(pokemon => this.matchesName(pokemon, criteria.name))
      .filter(pokemon => this.matchesAbilities(pokemon, criteria.abilities));
  }

  private matchesId(pokemon: PokemonRow, id: string): boolean {
    if (!id.trim()) {
      return true;
    }
    
    return pokemon.id.toString().includes(id);
  }

  private matchesName(pokemon: PokemonRow, name: string): boolean {
    if (!name.trim()) {
      return true;
    }
    
    return pokemon.name.toLowerCase().includes(name.toLowerCase());
  }

  private matchesAbilities(pokemon: PokemonRow, abilities: string): boolean {
    if (!abilities.trim()) {
      return true;
    }
    
    const searchTerm = abilities.toLowerCase();
    
    return pokemon.abilities.some(abilityObject => 
      abilityObject.ability.name.toLowerCase().includes(searchTerm)
    );
  } 
}
