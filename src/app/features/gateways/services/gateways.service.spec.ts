import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppStoreModule } from '@store/store.module';

import { GatewaysService } from './gateways.service';

describe('GatewaysService', () => {
  let service: GatewaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppStoreModule, HttpClientModule]
    });
    service = TestBed.inject(GatewaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
