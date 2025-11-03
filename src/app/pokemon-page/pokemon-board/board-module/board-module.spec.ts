import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardModule } from './board-module';

describe('BoardModule', () => {
  let component: BoardModule;
  let fixture: ComponentFixture<BoardModule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardModule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
