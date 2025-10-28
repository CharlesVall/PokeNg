import { TestBed } from '@angular/core/testing';

import { ListFilterService } from './filter-strategy-service';

describe('FilterService', () => {
  let service: ListFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
