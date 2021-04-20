import { TestBed } from '@angular/core/testing';

import { ConductoresauthGuard } from './conductoresauth.guard';

describe('ConductoresauthGuard', () => {
  let guard: ConductoresauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConductoresauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
