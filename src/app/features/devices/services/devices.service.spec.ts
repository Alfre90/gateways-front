import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { GatewaysService } from '@features/gateways/services/gateways.service';

import { DevicesService } from './devices.service';

describe('DevicesService', () => {
  let service: DevicesService;
  let gatewayService: GatewaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(DevicesService);
    gatewayService = TestBed.inject(GatewaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
