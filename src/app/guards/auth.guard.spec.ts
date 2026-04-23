import { TestBed } from '@angular/core/testing';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    });

    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return false if not logged in', () => {
    guard.isLoggedIn = false;
    expect(guard.canActivate()).toBeFalse();
  });

  it('should return true if logged in', () => {
    guard.isLoggedIn = true;
    expect(guard.canActivate()).toBeTrue();
  });
});