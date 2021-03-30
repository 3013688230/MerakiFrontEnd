import { TestBed } from '@angular/core/testing';

import { ServicioPropietarioService } from './servicio-propietario.service';

describe('ServicioPropietarioService', () => {
  let service: ServicioPropietarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPropietarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
