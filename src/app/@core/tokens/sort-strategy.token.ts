import { InjectionToken } from "@angular/core";
import { SortStrategy } from "@core/models";

export const SORT_STRATEGIES = new InjectionToken<SortStrategy[]>('SORT_STRATEGIES')