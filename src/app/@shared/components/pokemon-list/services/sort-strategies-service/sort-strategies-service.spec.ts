import { TestBed } from '@angular/core/testing';

import { SortStrategiesService } from './sort-strategies-service';

describe('SortStrategyService', () => {
  let service: SortStrategiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortStrategiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
