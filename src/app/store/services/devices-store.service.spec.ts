import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppStoreModule } from '@store/store.module';

import { DevicesStoreService } from './devices-store.service';

describe('DevicesStoreService', () => {
  let service: DevicesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppStoreModule, HttpClientModule]
    });
    service = TestBed.inject(DevicesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
