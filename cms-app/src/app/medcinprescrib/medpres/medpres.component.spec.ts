import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedpresComponent } from './medpres.component';

describe('MedpresComponent', () => {
  let component: MedpresComponent;
  let fixture: ComponentFixture<MedpresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedpresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
