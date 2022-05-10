import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestsPrescribedComponent } from './lab-tests-prescribed.component';

describe('LabTestsPrescribedComponent', () => {
  let component: LabTestsPrescribedComponent;
  let fixture: ComponentFixture<LabTestsPrescribedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTestsPrescribedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTestsPrescribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
