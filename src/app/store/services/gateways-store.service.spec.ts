import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppStoreModule } from '..';

import { GatewaysStoreService } from './gateways-store.service';

describe('GatewaysStoreService', () => {
  let service: GatewaysStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppStoreModule, HttpClientModule]
    });
    service = TestBed.inject(GatewaysStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
