import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardBackButtonsLayout } from './forward-back-buttons-layout';

describe('ForwardBackButtonsLayout', () => {
  let component: ForwardBackButtonsLayout;
  let fixture: ComponentFixture<ForwardBackButtonsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForwardBackButtonsLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForwardBackButtonsLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
