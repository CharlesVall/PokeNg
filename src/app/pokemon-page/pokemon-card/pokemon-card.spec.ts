import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemondCard } from './pokemon-card';

describe('PokemondCard', () => {
  let component: PokemondCard;
  let fixture: ComponentFixture<PokemondCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemondCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemondCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
