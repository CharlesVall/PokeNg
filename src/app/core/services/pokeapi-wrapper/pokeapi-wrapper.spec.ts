import { TestBed } from '@angular/core/testing';

import { PokeapiWrapper } from './pokeapi-wrapper';

describe('PokeapiWrapper', () => {
  let service: PokeapiWrapper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeapiWrapper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
