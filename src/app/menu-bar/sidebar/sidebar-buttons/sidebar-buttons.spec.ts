import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuButtons } from './menu-buttons';

describe('MenuButtons', () => {
  let component: MenuButtons;
  let fixture: ComponentFixture<MenuButtons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuButtons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
