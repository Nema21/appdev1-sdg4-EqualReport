import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public auth: AuthGuard, private router: Router) {}

  login() {
    this.auth.isLoggedIn = true;
    this.router.navigate(['/dashboard']);
  }

  logout() {
    this.auth.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
