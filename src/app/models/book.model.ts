export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
}

export interface OpenLibraryResponse {
  works: Book[];
}