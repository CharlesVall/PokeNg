import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePageHeader } from './feature-page-header';

describe('FeaturePageHeader', () => {
  let component: FeaturePageHeader;
  let fixture: ComponentFixture<FeaturePageHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePageHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturePageHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
