import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedcinprescribComponent } from './medcinprescrib.component';

describe('MedcinprescribComponent', () => {
  let component: MedcinprescribComponent;
  let fixture: ComponentFixture<MedcinprescribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedcinprescribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedcinprescribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
