import { Injectable, inject } from '@angular/core';
import { SortStrategy } from '@core/models/';
import { SORT_STRATEGIES } from '@core/tokens/sort-strategy.token';

@Injectable({ providedIn: 'root' })
export class SortStrategiesService {
  private readonly strategies = inject(SORT_STRATEGIES);

  public sortData<T>(data: T[], field: keyof T & string, order: 1 | -1): T[] {
    const strategy = this.findStrategy(field);
    return data.sort((a, b) => strategy.sort(a, b, order, field));
  }

  private findStrategy(field: string): SortStrategy {
    const specific = this.strategies.find(s => s.supports(field));
    if (specific) return specific;

    const fallback = this.strategies.find(s => s.supports('*'));
    if (fallback) return fallback;

    return this.strategies[this.strategies.length - 1];
  }
}