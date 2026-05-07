import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { OpenLibraryResponse, Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private http = inject(HttpClient);

<<<<<<< HEAD
  getBooks(subject: string): Observable<OpenLibraryResponse> {
=======
  // Shared signal for search query (used across components)
  searchQuery = signal<string>('');

  getBooks(subject: string = 'education'): Observable<OpenLibraryResponse> {
>>>>>>> 4e0493ed05c8281fff4ea17bde9e977dff9b782b
    return this.http.get<OpenLibraryResponse>(
      `https://openlibrary.org/subjects/${subject}.json?limit=20`
    ).pipe(
      catchError(() => {
        return of({ works: [] });
      })
    );
  }

  searchBooks(query: string): Observable<OpenLibraryResponse> {
    return this.http.get<OpenLibraryResponse>(
    `https://openlibrary.org/subjects/${query.toLowerCase().replace(/\s+/g, '_')}.json?limit=20`
  ).pipe(

    catchError(() => of({ works: [] }))
    );
  }
}