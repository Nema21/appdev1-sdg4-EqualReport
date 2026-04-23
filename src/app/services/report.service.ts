import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Report {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = 'https://dev.to/api/articles';

  constructor(private http: HttpClient) {}

  getReports(): Observable<Report[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(res =>
        res.map(item => ({
          id: item.id,
          title: item.title,
          body: item.description || item.body_markdown
        }))
      )
    );
  }

  getReportById(id: number): Observable<Report> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(item => ({
        id: item.id,
        title: item.title,
        body: item.description || item.body_markdown
      }))
    );
  }
}