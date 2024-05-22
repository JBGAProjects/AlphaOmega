import { TestBed } from '@angular/core/testing';

import { DataAccessUsuarioService } from './data-access-usuario.service';

describe('DataAccessUsuarioService', () => {
  let service: DataAccessUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataAccessUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
