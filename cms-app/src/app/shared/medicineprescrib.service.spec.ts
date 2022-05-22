import { TestBed } from '@angular/core/testing';

import { MedicineprescribService } from './medicineprescrib.service';

describe('MedicineprescribService', () => {
  let service: MedicineprescribService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicineprescribService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
