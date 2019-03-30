import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DollyAndZoomComponent } from './dolly-and-zoom.component';

describe('DollyAndZoomComponent', () => {
  let component: DollyAndZoomComponent;
  let fixture: ComponentFixture<DollyAndZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DollyAndZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DollyAndZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
