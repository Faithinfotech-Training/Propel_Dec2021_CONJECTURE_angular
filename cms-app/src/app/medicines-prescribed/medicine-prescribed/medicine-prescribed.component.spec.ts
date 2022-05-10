import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinePrescribedComponent } from './medicine-prescribed.component';

describe('MedicinePrescribedComponent', () => {
  let component: MedicinePrescribedComponent;
  let fixture: ComponentFixture<MedicinePrescribedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinePrescribedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinePrescribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
