import { TestBed } from '@angular/core/testing';

import { MedidasApiService } from './medidas-api.service';

describe('MedidasApiService', () => {
  let service: MedidasApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedidasApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
