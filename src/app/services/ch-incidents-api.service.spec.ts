import { TestBed } from '@angular/core/testing';

import { ChIncidentsApiService } from './ch-incidents-api.service';

describe('ChIncidentsApiService', () => {
  let service: ChIncidentsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChIncidentsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
