import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinePrescribedListComponent } from './medicine-prescribed-list.component';

describe('MedicinePrescribedListComponent', () => {
  let component: MedicinePrescribedListComponent;
  let fixture: ComponentFixture<MedicinePrescribedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicinePrescribedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicinePrescribedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
