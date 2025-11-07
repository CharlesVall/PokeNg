import { Provider } from '@angular/core';
import { FILTER_STRATEGIES } from '@core/tokens/filter-strategy.token';
import { IdFilterStrategy } from './id-filter-strategy';
import { NameFilterStrategy } from './name-filter-strategy';
import { AbilitiesFilterStrategy } from './abilities-filter-strategy';
import { TypesFilterStrategy } from './types-filter-strategy';

export const FILTER_STRATEGIES_PROVIDERS: Provider[] = [
  { provide: FILTER_STRATEGIES, useClass: IdFilterStrategy, multi: true },
  { provide: FILTER_STRATEGIES, useClass: NameFilterStrategy, multi: true },
  { provide: FILTER_STRATEGIES, useClass: AbilitiesFilterStrategy, multi: true },
  { provide: FILTER_STRATEGIES, useClass: TypesFilterStrategy, multi: true },
];
