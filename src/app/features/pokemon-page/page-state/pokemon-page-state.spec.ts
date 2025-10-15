import { TestBed } from '@angular/core/testing';

import { PokemonState } from './pokemon-state';

describe('PokemonState', () => {
  let service: PokemonState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
