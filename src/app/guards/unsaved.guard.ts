import { CanDeactivateFn } from '@angular/router';

export const unsavedGuard: CanDeactivateFn<any> = () => {
  return confirm('Leave this page?');
};