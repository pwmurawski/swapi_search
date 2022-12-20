export interface IPagination<Results> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Results[];
}
