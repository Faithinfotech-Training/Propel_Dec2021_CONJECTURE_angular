import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestprescribComponent } from './testprescrib.component';

describe('TestprescribComponent', () => {
  let component: TestprescribComponent;
  let fixture: ComponentFixture<TestprescribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestprescribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestprescribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
