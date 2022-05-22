import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlabtestComponent } from './editlabtest.component';

describe('EditlabtestComponent', () => {
  let component: EditlabtestComponent;
  let fixture: ComponentFixture<EditlabtestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlabtestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlabtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
