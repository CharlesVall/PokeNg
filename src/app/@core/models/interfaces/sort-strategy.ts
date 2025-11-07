export interface SortStrategy {
  supports(field: string): boolean;
  sort(a: any, b: any, field: string, order: number): number;
}
