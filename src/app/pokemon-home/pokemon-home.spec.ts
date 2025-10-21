import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHome } from './pokemon-home';

describe('PokemonHome', () => {
  let component: PokemonHome;
  let fixture: ComponentFixture<PokemonHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
