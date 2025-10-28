import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCompare } from './pokemon-compare';

describe('PokemonCompare', () => {
  let component: PokemonCompare;
  let fixture: ComponentFixture<PokemonCompare>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCompare]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCompare);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
