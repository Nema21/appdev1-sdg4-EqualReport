import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService, Report } from '../../services/report.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {

  report!: Report;

  constructor(
    private route: ActivatedRoute,
    private service: ReportService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getReportById(id).subscribe(data => {
      this.report = data;
    });
  }
}