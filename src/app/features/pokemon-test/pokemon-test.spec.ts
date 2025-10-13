import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTest } from './pokemon-test';

describe('PokemonTest', () => {
  let component: PokemonTest;
  let fixture: ComponentFixture<PokemonTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
