import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonFormModule } from './pokemon-form-module';

describe('PokemonFormModule', () => {
  let component: PokemonFormModule;
  let fixture: ComponentFixture<PokemonFormModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonFormModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonFormModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
