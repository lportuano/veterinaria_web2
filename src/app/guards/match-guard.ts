import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { OutService } from '../services/out-service';

export const publicmatchGuard: CanMatchFn = (route, segments) => {

  const servicioAuth = inject(OutService);

  const router = inject(Router);

  if (servicioAuth.sesionIniciada()) {
    if (route.path === 'login' || route.path == 'Crearcuenta') {
      return router.parseUrl('mascotas');
    }
  }
  return true;
};

export const empleadoMatchGuard: CanMatchFn = (route, segments) => {
  const servicioAuth = inject(OutService);
  const router = inject(Router);

  if (!servicioAuth.sesionIniciada()) {
    return router.parseUrl('login');
  };

  if (servicioAuth.rolActual() === 'ADMIN' || servicioAuth.rolActual() === 'EMPLEADO') {
    return true;
  }
  return false;
}

//funcion para 
export const adminMatchGuard: CanMatchFn = (route, segments) => {

  const servicioAuth = inject(OutService);
  const router = inject(Router);

  if (!servicioAuth.sesionIniciada()) {
    return router.parseUrl('login')
  };

  if (servicioAuth.rolActual() === 'ADMIN') {
    return true;
  }
  return router.parseUrl('mascotas')

}