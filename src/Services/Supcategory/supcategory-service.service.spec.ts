import { TestBed } from '@angular/core/testing';

import { SupcategoryServiceService } from './supcategory-service.service';

describe('SupcategoryServiceService', () => {
  let service: SupcategoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupcategoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
