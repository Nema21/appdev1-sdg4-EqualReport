import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private http = inject(HttpClient);

  getBooks(): Observable<any> {
    return this.http.get('https://openlibrary.org/subjects/education.json');
  }
}