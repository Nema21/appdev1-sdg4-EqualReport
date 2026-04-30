import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReportService } from '../../services/report.service';
import { Observable, map } from 'rxjs';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html'
})
export class DetailComponent {

  book$!: Observable<Book | undefined>;

  constructor(
    private route: ActivatedRoute,
    private service: ReportService
  ) {
    const id = this.route.snapshot.paramMap.get('id');

    this.book$ = this.service.getBooks().pipe(
      map(res => res.works.find(b => b.key.includes(id!)))
    );
  }
}