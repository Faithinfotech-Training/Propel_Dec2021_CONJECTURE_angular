import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinesPrescribedComponent } from './medicines-prescribed.component';

describe('MedicinesPrescribedComponent', () => {
  let component: MedicinesPrescribedComponent;
  let fixture: ComponentFixture<MedicinesPrescribedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinesPrescribedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinesPrescribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
