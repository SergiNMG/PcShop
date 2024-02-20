import { TestBed } from '@angular/core/testing';

import { ProveedorHTTPService } from './proveedor-http.service';

describe('ProveedorHTTPService', () => {
  let service: ProveedorHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedorHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
