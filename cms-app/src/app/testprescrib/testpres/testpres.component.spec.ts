import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpresComponent } from './testpres.component';

describe('TestpresComponent', () => {
  let component: TestpresComponent;
  let fixture: ComponentFixture<TestpresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
