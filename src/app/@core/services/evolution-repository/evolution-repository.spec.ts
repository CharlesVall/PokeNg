import { TestBed } from '@angular/core/testing';

import { EvolutionRepository } from './evolution-repository';

describe('EvolutionRepository', () => {
  let service: EvolutionRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvolutionRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
