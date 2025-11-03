import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEvolutionModule } from './pokemon-evolution-module';

describe('PokemonEvolutionModule', () => {
  let component: PokemonEvolutionModule;
  let fixture: ComponentFixture<PokemonEvolutionModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonEvolutionModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonEvolutionModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
