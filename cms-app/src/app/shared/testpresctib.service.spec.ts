import { TestBed } from '@angular/core/testing';

import { TestpresctibService } from './testpresctib.service';

describe('TestpresctibService', () => {
  let service: TestpresctibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestpresctibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
