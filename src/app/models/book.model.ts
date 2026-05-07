export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
  subject?: string[];
  edition_count?: number;
}

export interface OpenLibraryResponse {
  works: Book[];
  name?: string;
  subject_count?: number;
}
