import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDisplayer } from './type-displayer';

describe('TypeDisplayer', () => {
  let component: TypeDisplayer;
  let fixture: ComponentFixture<TypeDisplayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeDisplayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeDisplayer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
