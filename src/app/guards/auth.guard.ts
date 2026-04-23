import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedIn = false;

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isLoggedIn) {
      return true;
    }

    alert('Access denied. Please login first.');
    this.router.navigate(['/']);
    return false;
  }
}