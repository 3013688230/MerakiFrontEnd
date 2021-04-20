import { TestBed } from '@angular/core/testing';

import { ClienteauthGuard } from './clienteauth.guard';

describe('ClienteauthGuard', () => {
  let guard: ClienteauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClienteauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
