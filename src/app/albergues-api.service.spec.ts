import { TestBed } from '@angular/core/testing';

import { AlberguesApiService } from './albergues-api.service';

describe('AlberguesApiService', () => {
  let service: AlberguesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlberguesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
