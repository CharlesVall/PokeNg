import { TestBed } from '@angular/core/testing';

import { IndexServices } from './index-services';

describe('IndexServices', () => {
  let service: IndexServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
