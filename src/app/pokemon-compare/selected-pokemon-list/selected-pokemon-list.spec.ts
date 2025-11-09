import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPokemonList } from './selected-pokemon-list';

describe('SelectedPokemonList', () => {
  let component: SelectedPokemonList;
  let fixture: ComponentFixture<SelectedPokemonList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedPokemonList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedPokemonList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
