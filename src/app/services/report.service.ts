import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { OpenLibraryResponse } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private http = inject(HttpClient);

  getBooks(subject: string): Observable<OpenLibraryResponse> {
    return this.http.get<OpenLibraryResponse>(
      'https://openlibrary.org/subjects/education.json?limit=10'
    ).pipe(
      catchError(() => {
        return of({ works: [] }); // prevents crash
      })
    );
  }
}