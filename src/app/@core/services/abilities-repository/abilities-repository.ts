import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AbilityDetails } from '@core/models';
import { API_URL } from '@core/tokens/api-url.token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesRepository {
  private readonly http = inject(HttpClient);
  private readonly apiURl = inject(API_URL)

  public getAbilityDetailsByName(abilityName: string): Observable<AbilityDetails> {
    return this.http.get<AbilityDetails>(`${this.apiURl}/ability/${abilityName}`)
  }
}
