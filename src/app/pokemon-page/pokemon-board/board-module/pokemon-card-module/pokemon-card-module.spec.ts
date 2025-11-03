import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardModule } from './pokemon-card-module';

describe('PokemonCardModule', () => {
  let component: PokemonCardModule;
  let fixture: ComponentFixture<PokemonCardModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonCardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
