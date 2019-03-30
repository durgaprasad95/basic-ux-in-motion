import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionalityComponent } from './dimensionality.component';

describe('DimensionalityComponent', () => {
  let component: DimensionalityComponent;
  let fixture: ComponentFixture<DimensionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
