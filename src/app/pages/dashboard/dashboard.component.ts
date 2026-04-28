import { Component } from '@angular/core';
import { ReportService, Book } from '../../services/report.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  books$: Observable<Book[]>;

  constructor(private service: ReportService) {
    this.books$ = this.service.getBooks();
  }

}