import { TestBed } from '@angular/core/testing';

import { PropietarioauthGuard } from './propietarioauth.guard';

describe('PropietarioauthGuard', () => {
  let guard: PropietarioauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PropietarioauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
