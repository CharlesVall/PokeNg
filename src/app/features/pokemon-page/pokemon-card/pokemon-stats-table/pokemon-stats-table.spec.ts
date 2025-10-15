import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonStatsTable } from './pokemon-stats-table';

describe('PokemonStatsTable', () => {
  let component: PokemonStatsTable;
  let fixture: ComponentFixture<PokemonStatsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonStatsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonStatsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
