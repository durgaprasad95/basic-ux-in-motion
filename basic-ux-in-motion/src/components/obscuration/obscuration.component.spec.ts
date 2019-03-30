import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObscurationComponent } from './obscuration.component';

describe('ObscurationComponent', () => {
  let component: ObscurationComponent;
  let fixture: ComponentFixture<ObscurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObscurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObscurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
