import { TestBed } from '@angular/core/testing';

import { TrabajadorHttpService } from './trabajador-http.service';

describe('TrabajadorHttpService', () => {
  let service: TrabajadorHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrabajadorHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
