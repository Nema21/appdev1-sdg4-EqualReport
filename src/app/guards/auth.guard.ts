import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedIn = false;
  private router = inject(Router);

  canActivate(): boolean {
    if (this.isLoggedIn) {
      return true;
    }

    alert('🔐 Access denied. Please login first to access the Dashboard.');
    this.router.navigate(['/']);
    return false;
  }
}
