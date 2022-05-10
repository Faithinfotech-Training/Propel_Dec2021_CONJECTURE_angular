import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestPrescribedListComponent } from './lab-test-prescribed-list.component';

describe('LabTestPrescribedListComponent', () => {
  let component: LabTestPrescribedListComponent;
  let fixture: ComponentFixture<LabTestPrescribedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTestPrescribedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTestPrescribedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
