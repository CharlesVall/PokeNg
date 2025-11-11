import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareStatsGraph } from './compare-stats-graph';

describe('CompareStatsGraph', () => {
  let component: CompareStatsGraph;
  let fixture: ComponentFixture<CompareStatsGraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompareStatsGraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareStatsGraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
