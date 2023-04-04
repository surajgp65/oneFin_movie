export interface Movies {
  count: string;
  next: string;
  previous: string;
  results: Result[];
}

interface Result {
  title: string;
  description: string;
  genres: string;
  uuid: string;
}
