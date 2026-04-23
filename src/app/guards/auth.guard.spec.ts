import { TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { CanActivateFn } from '@angular/router';
import { authGuard } from './auth.guard';

describe('AuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authGuard(...guardParameters));
=======
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';

describe('AuthGuard', () => {
  let guard: AuthGuard;
>>>>>>> 725407012df35b2c982cb644f7656a99d11742e6

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