import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private auth: AuthGuard, private router: Router) {}

  login() {
    this.auth.isLoggedIn = true;
    alert('Logged in!');
    this.router.navigate(['/dashboard']);
  }
}