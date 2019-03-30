import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloningComponent } from './cloning.component';

describe('CloningComponent', () => {
  let component: CloningComponent;
  let fixture: ComponentFixture<CloningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
