import { TestBed } from '@angular/core/testing';

import { GatewaysStoreService } from './gateways-store.service';

describe('GatewaysStoreService', () => {
  let service: GatewaysStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GatewaysStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
