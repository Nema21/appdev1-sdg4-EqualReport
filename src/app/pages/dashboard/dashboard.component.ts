import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Observable, tap, catchError, of } from 'rxjs';

import { BookCardComponent } from '../../components/book-card/book-card.component';
import { ReportService } from '../../services/report.service';
import { Book, OpenLibraryResponse } from '../../models/book.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    BookCardComponent,
    FormsModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  // Notes State
  notes = '';
  hasUnsavedChanges = false;

  // Signals
  loading = signal(true);
  error = signal(false);
  searchTerm = signal('');
  totalBooks = signal(0);

  books$!: Observable<OpenLibraryResponse>;

  // Computed Signal
  searchSummary = computed(() =>
    this.searchTerm()
      ? `Searching for: "${this.searchTerm()}"`
      : 'Showing: All Education Books'
  );

  constructor(
    private service: ReportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadBooks('education');
  }

  loadBooks(subject: string): void {
    this.loading.set(true);
    this.error.set(false);

    this.books$ = this.service.getBooks(subject).pipe(
      tap((res) => {
        this.loading.set(false);
        this.totalBooks.set(res.works.length);
      }),
      catchError(() => {
        this.loading.set(false);
        this.error.set(true);

        return of({ works: [] });
      })
    );
  }

  onSearch(query: string): void {
    this.searchTerm.set(query);

    if (query.trim()) {
      this.loadBooks(query.trim());
    } else {
      this.loadBooks('education');
    }
  }

  viewDetails(key: string): void {
    const id = key.split('/').pop();
    this.router.navigate(['/dashboard', id]);
  }

  onNotesChange(): void {
    this.hasUnsavedChanges = true;
  }
}