import { TestBed } from '@angular/core/testing';

import { LabTestPrescribedService } from './lab-test-prescribed.service';

describe('LabTestPrescribedService', () => {
  let service: LabTestPrescribedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabTestPrescribedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
