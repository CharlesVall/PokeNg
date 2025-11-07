import { InjectionToken } from "@angular/core";
import { FilterStrategy } from "@core/models/interfaces/filter-strategy";

export const FILTER_STRATEGIES = new InjectionToken<FilterStrategy[]>('FILTER_STRATEGIES')