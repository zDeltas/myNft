import { TestBed } from '@angular/core/testing';

import { NftManagementService } from './nft-management.service';

describe('NftManagementService', () => {
  let service: NftManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
