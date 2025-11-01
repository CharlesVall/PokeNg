// abilities.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { arrayFilter } from '@paddls/rxjs-common';
import { AbilityDetails, FlavorTextEntry } from '@core/models';
import { APP_LANGUAGE } from '@core/tokens/app-language.token';
import { API_URL } from '@core/tokens/api-url.token';
import { hardCache } from '@paddls/rxjs-common';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = inject(API_URL);
  private readonly appLanguage = inject(APP_LANGUAGE);

  private fetchAbilityDetails(abilityName: string): Observable<AbilityDetails> {
    return this.http
      .get<AbilityDetails>(`${this.apiUrl}/ability/${abilityName}`)
      .pipe(hardCache());
  }

  public getAbilityDetails(abilityName: string): Observable<AbilityDetails> {
    return this.fetchAbilityDetails(abilityName);
  }

  public getAbilityDescriptionByName(abilityName: string): Observable<string> {
    return this.fetchAbilityDetails(abilityName).pipe(
      map(details => details.flavor_text_entries),
      arrayFilter((entry: FlavorTextEntry) => 
        this.isMatchingDescription(entry)
      ),
      map((entries: FlavorTextEntry[]) => 
        entries[0]?.flavor_text ?? 'No Description'
      )
    );
  }

  private isMatchingDescription(entry: FlavorTextEntry): boolean {
    return entry.language.name === this.appLanguage && 
           entry.version_group.name === 'scarlet-violet';
  }
}