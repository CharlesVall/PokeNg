import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAbilitiesDisplayer } from './pokemon-abilities-displayer';

describe('PokemonAbilitiesDisplayer', () => {
  let component: PokemonAbilitiesDisplayer;
  let fixture: ComponentFixture<PokemonAbilitiesDisplayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonAbilitiesDisplayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonAbilitiesDisplayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
