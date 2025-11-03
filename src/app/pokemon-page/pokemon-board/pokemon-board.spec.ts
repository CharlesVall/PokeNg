import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonBoard } from './pokemon-board';

describe('PokemonBoard', () => {
  let component: PokemonBoard;
  let fixture: ComponentFixture<PokemonBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
