import { Component } from '@angular/core';
import { AuthGuard } from '../../guards/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private auth: AuthGuard, private router: Router) {}

  login() {
    this.auth.isLoggedIn = true;
    alert('Logged in to LearnHub!');
    this.router.navigate(['/dashboard']);
  }
}