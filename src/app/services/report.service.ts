import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Book {
  key: string;
  title: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = 'https://openlibrary.org/search.json?q=education';

  constructor(private http: HttpClient) {}

  // 🔹 GET LIST OF BOOKS
  getBooks(): Observable<Book[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res =>
        res.docs.slice(0, 10).map((item: any) => ({
          key: item.key,
          title: item.title,
          author: item.author_name?.[0] || 'Unknown'
        }))
      )
    );
  }

  // 🔹 GET SINGLE BOOK (DETAIL PAGE)
  getBookByKey(key: string): Observable<Book> {
    return this.http.get<any>(`https://openlibrary.org${key}.json`).pipe(
      map(item => ({
        key: item.key,
        title: item.title,
        author: 'Unknown' // simplified for now
      }))
    );
  }

}