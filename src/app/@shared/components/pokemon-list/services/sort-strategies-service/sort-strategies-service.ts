import { Injectable, inject } from '@angular/core';
import { SortStrategy } from '@core/models/';
import { SORT_STRATEGIES } from '@core/tokens/sort-strategy.token';

@Injectable()
export class SortStrategiesService {
  private readonly sortStrategies = inject(SORT_STRATEGIES);

  public sortData<T>(data: T[], field: keyof T & string, order: 1 | -1): T[] {
    const sortStrategy = this.findStrategy(field);
    return data.sort((a, b) => sortStrategy.sort(a, b, field, order));
  }

  private findStrategy(field: string): SortStrategy {
    const specific = this.sortStrategies.find(strategy => strategy.supports(field));
    if (specific) {
      return specific;
    }

    const fallback = this.sortStrategies.find(strategy => strategy.supports('*'));
    if (fallback) {
      return fallback;
    }

    return this.sortStrategies[this.sortStrategies.length - 1];
  }
}