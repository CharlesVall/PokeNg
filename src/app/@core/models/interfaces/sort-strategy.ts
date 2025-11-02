export interface SortStrategy {
  supports(field: string): boolean;
  sort(a: any, b: any, order: number, field: string): number;
}
