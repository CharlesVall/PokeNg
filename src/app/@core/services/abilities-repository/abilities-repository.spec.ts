import { TestBed } from '@angular/core/testing';

import { AbilitiesRepository } from './abilities-repository';

describe('AbilitiesRepository', () => {
  let service: AbilitiesRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbilitiesRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
