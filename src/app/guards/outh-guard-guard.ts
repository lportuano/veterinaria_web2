import { CanActivateFn } from '@angular/router';
import { Component } from '@angular/core';

export const outhGuardGuard: CanActivateFn = (Component) => {
  return true;
};
