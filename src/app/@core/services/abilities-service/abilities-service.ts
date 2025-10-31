import { inject, Injectable } from '@angular/core';
import { AbilitiesRepository } from '../abilities-repository/abilities-repository';
import { map, Observable } from 'rxjs';
import { arrayFilter } from '@paddls/rxjs-common';
import { AbilityDetails, FlavorTextEntry } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {
  private readonly abilitiesRepository = inject(AbilitiesRepository)
  
  private isMatchingDescription(
    entry: FlavorTextEntry, 
    language = 'en', 
    versionGroup = 'scarlet-violet'
  ): boolean {
    return entry.language.name === language && 
           entry.version_group.name === versionGroup;
  }
  
  public getAbilityDetailsByName(abilityName: string): Observable<AbilityDetails> {
    return this.abilitiesRepository.getAbilityDetailsByName(abilityName)
  }

  public getAbilityDescriptionByName(abilityName: string): Observable<string> {
    return this.getAbilityDetailsByName(abilityName).pipe(
      map(result => result.flavor_text_entries),
      arrayFilter((
        flavorTextEntry: FlavorTextEntry) => this.isMatchingDescription(flavorTextEntry)
        ),
      map((
        flavorTextEntry: FlavorTextEntry[]) => 
          flavorTextEntry[0]?.flavor_text ?? 'No Description'
      ),
    )
  }
}