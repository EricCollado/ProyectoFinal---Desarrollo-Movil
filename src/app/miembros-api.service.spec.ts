import { TestBed } from '@angular/core/testing';

import { MiembrosApiService } from './miembros-api.service';

describe('MiembrosApiService', () => {
  let service: MiembrosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiembrosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
