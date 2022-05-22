import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpresListComponent } from './testpres-list.component';

describe('TestpresListComponent', () => {
  let component: TestpresListComponent;
  let fixture: ComponentFixture<TestpresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestpresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
