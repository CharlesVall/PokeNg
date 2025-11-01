import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '@core/tokens/api-url.token';

@Injectable({
  providedIn: 'root'
})
export class EvolutionRepository {
  private readonly apiUrl = inject(API_URL)
  private readonly http = inject(HttpClient)
  
}
