import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService, Book } from '../../services/report.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  book$!: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private service: ReportService
  ) {}

  ngOnInit() {
    const key = this.route.snapshot.paramMap.get('key')!;
    this.book$ = this.service.getBookByKey(key);
  }
}