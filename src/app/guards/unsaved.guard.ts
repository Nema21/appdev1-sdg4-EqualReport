import { CanDeactivateFn } from '@angular/router';

export const unsavedGuard: CanDeactivateFn<any> = (component) => {

  if (component.hasUnsavedChanges) {
    return confirm('You have unsaved notes. Leave anyway?');
  }

  return true;
};