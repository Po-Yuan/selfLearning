import { TestBed } from '@angular/core/testing';

import { TestNgGSServicesService } from './test-ng-gsservices.service';

describe('TestNgGSServicesService', () => {
  let service: TestNgGSServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestNgGSServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
