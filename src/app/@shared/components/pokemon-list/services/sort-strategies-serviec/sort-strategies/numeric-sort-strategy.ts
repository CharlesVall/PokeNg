import { Injectable } from "@angular/core";
import { SortStrategy } from "@core/models";

@Injectable()
export class NumericSortStrategy implements SortStrategy {
  supports(field: string): boolean {
    return ['id'].includes(field);
  }
  sort(a: any, b: any, order: number, field: string): number {
    return (Number(a[field]) - Number(b[field])) * order;
  }
}