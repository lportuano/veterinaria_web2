import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { outhGuardGuard } from './outh-guard-guard';

describe('outhGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => outhGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
