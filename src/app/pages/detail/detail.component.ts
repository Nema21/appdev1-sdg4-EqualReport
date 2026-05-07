import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../services/report.service';
import { Observable, map } from 'rxjs';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  book$!: Observable<Book | undefined>;
  bookId = signal<string>('');

  constructor(
    private route: ActivatedRoute,
    private service: ReportService,
    private router: Router
  ) {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.bookId.set(id);

    this.book$ = this.service.getBooks('bible').pipe(
      map(res => res.works.find(b => b.key.includes(id)))
    );
  }

  getCoverUrl(coverId?: number): string {
    if (coverId) {
      return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
    }
    return 'https://via.placeholder.com/300x400?text=No+Cover';
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}
