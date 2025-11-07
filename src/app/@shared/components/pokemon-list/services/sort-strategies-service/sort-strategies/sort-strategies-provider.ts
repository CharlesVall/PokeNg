import { Provider } from '@angular/core';
import { SORT_STRATEGIES } from '@core/tokens/sort-strategy.token';
import { TextSortStrategy } from './text-sort-strategy';
import { NumericSortStrategy } from './numeric-sort-strategy';

export const SORT_STRATEGIES_PROVIDERS: Provider[] = [
  { provide: SORT_STRATEGIES, useClass: TextSortStrategy, multi: true },
  { provide: SORT_STRATEGIES, useClass: NumericSortStrategy, multi: true },
];
