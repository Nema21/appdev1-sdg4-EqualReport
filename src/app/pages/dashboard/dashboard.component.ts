import { Component, signal, computed, effect, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { BookCardComponent } from '../../components/book-card/book-card.component';
import { ReportService } from '../../services/report.service';
import { Observable, tap, catchError, of } from 'rxjs';
import { Book, OpenLibraryResponse } from '../../models/book.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, BookCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  // Signals for reactive state management
  loading = signal(true);
  error = signal(false);
  searchTerm = signal('');
  totalBooks = signal(0);

  books$!: Observable<OpenLibraryResponse>;

  // Computed signal - derives filtered summary text
  searchSummary = computed(() =>
    this.searchTerm() ? `Searching for: "${this.searchTerm()}"` : 'Showing: All Education Books'
  );

  constructor(
    private service: ReportService,
    private router: Router
  ) {
    // Effect: log whenever search changes (demonstrates effect())
    effect(() => {
      if (this.searchTerm()) {
        console.log(`[LearnHub] Search updated: ${this.searchTerm()}`);
      }
    });
  }

  ngOnInit() {
    this.loadBooks('education');
  }

  loadBooks(subject: string) {
    this.loading.set(true);
    this.error.set(false);
    this.books$ = this.service.getBooks(subject).pipe(
      tap((res) => {
        this.loading.set(false);
        this.error.set(false);
        this.totalBooks.set(res.works.length);
      }),
      catchError(() => {
        this.loading.set(false);
        this.error.set(true);
        return of({ works: [] });
      })
    );
  }

  onSearch(query: string) {
    this.searchTerm.set(query);
    if (query.trim()) {
      this.loadBooks(query.trim());
    } else {
      this.loadBooks('education');
    }
  }

  viewDetails(key: string) {
    const id = key.split('/').pop();
    this.router.navigate(['/dashboard', id]);
  }
}
