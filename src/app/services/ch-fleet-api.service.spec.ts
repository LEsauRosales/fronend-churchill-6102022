import { TestBed } from '@angular/core/testing';

import { ChFleetApiService } from './ch-fleet-api.service';

describe('ChFleetApiService', () => {
  let service: ChFleetApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChFleetApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
