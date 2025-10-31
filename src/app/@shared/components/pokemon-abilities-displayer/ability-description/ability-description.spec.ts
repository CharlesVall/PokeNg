import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbilityDescription } from './ability-description';

describe('AbilityDescription', () => {
  let component: AbilityDescription;
  let fixture: ComponentFixture<AbilityDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbilityDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbilityDescription);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
