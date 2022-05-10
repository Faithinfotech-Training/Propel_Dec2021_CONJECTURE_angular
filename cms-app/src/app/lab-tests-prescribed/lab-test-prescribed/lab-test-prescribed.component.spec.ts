import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestPrescribedComponent } from './lab-test-prescribed.component';

describe('LabTestPrescribedComponent', () => {
  let component: LabTestPrescribedComponent;
  let fixture: ComponentFixture<LabTestPrescribedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTestPrescribedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTestPrescribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
