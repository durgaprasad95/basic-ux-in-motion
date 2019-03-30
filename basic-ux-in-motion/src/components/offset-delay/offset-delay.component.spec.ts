import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetDelayComponent } from './offset-delay.component';

describe('OffsetDelayComponent', () => {
  let component: OffsetDelayComponent;
  let fixture: ComponentFixture<OffsetDelayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffsetDelayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffsetDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
