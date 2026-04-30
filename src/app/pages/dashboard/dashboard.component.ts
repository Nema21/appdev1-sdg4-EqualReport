import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { BookCardComponent } from '../../components/book-card/book-card.component';
import { ReportService } from '../../services/report.service';
import { Observable, tap } from 'rxjs';
import { OpenLibraryResponse } from '../../models/book.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  loading = signal(true);
  books$!: Observable<OpenLibraryResponse>;

  constructor(
    private service: ReportService,
    private router: Router
  ) {
    this.books$ = this.service.getBooks().pipe(
      tap(() => this.loading.set(false))
    );
  }

  viewDetails(key: string) {
    const id = key.split('/').pop();
    this.router.navigate(['/dashboard', id]);
  }
}