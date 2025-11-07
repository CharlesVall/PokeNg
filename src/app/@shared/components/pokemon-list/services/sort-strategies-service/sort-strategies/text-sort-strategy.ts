import { Injectable } from "@angular/core";
import { SortStrategy } from "@core/models";

@Injectable()
export class TextSortStrategy implements SortStrategy {
  supports(field: string): boolean {
    return field === '*';
  }
  
  sort(a: any, b: any, field: string, order: number): number {
    return a[field].localeCompare(b[field]) * order;
  }
}
