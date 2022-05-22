import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedpresListComponent } from './medpres-list.component';

describe('MedpresListComponent', () => {
  let component: MedpresListComponent;
  let fixture: ComponentFixture<MedpresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedpresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedpresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
