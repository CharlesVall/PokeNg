import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStatsModule } from './pokemon-stats-module';

describe('PokemonStatsModule', () => {
  let component: PokemonStatsModule;
  let fixture: ComponentFixture<PokemonStatsModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonStatsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonStatsModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
