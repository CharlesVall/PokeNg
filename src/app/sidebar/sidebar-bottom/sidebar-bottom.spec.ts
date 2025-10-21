import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBottom } from './sidebar-bottom';

describe('SidebarBottom', () => {
  let component: SidebarBottom;
  let fixture: ComponentFixture<SidebarBottom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarBottom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarBottom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
