import { Component } from '@angular/core';
import { ReportService, Report } from '../../services/report.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {

  reports$: Observable<Report[]>;

  constructor(private service: ReportService, private router: Router) {
    this.reports$ = this.service.getReports();
  }

  viewDetails(id: number) {
    this.router.navigate(['/dashboard', id]);
  }
}