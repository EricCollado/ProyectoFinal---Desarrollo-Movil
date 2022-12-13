import { TestBed } from '@angular/core/testing';

import { VideosApiService } from './videos-api.service';

describe('VideosApiService', () => {
  let service: VideosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
