import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobilebar } from './mobilebar';

describe('Mobilebar', () => {
  let component: Mobilebar;
  let fixture: ComponentFixture<Mobilebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mobilebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mobilebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
