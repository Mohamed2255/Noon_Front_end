import { TestBed } from '@angular/core/testing';

import { DelivercompanySkipImportService } from './delivercompany--skip-import.service';

describe('DelivercompanySkipImportService', () => {
  let service: DelivercompanySkipImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelivercompanySkipImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
