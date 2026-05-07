import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private auth: AuthGuard, private router: Router) {}

  login() {
    this.auth.isLoggedIn = true;
    this.router.navigate(['/dashboard']);
  }
}
