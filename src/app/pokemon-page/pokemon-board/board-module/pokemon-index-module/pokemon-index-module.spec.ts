import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonIndexModule } from './pokemon-index-module';

describe('PokemonIndexModule', () => {
  let component: PokemonIndexModule;
  let fixture: ComponentFixture<PokemonIndexModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonIndexModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonIndexModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
