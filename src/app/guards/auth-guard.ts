import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OutService } from '../services/out-service';

export const authGuard: CanActivateFn = (route, state) => {

  const servicioAuth = inject(OutService);

  const router = inject(Router);

  if (servicioAuth.sesionIniciada()) {
    return true;
  }
  return router.parseUrl('/login');
};
