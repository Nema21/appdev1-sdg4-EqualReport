import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Report {
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiUrl);
  }

  getReportById(id: number): Observable<Report> {
    return this.http.get<Report>(`${this.apiUrl}/${id}`);
  }
}