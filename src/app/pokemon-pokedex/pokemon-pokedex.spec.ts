import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonPokedex } from './pokemon-pokedex';

describe('PokemonPokedex', () => {
  let component: PokemonPokedex;
  let fixture: ComponentFixture<PokemonPokedex>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonPokedex]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonPokedex);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
