import { TestBed } from '@angular/core/testing';

import { MedicinePrescribedService } from './medicine-prescribed.service';

describe('MedicinePrescribedService', () => {
  let service: MedicinePrescribedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicinePrescribedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
