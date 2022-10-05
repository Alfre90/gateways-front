import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { IAddGateway } from '@features/gateways/interfaces/add-gateway';
import { GatewaysService } from '@features/gateways/services/gateways.service';
import { IAddDevice } from '../interfaces/add-device';

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

  it('should create a device', (done: DoneFn) => {
    let device: IAddDevice = {
      gatewayId: 1,
      vendor: 'Apple',
      status: false,
      created: '2022-10-05'
    };
    let gateway: IAddGateway = {
      name: 'Apple',
      serialNumber: (
        Math.floor(Math.random() * (100000 - 0 + 1)) + 0
      ).toString(),
      iPv4: '111.111.111.1'
    };
    gatewayService.addGateway(gateway).subscribe(() => {
      service.addDevice(device).subscribe(() => {
        service.getAll('', 'GatewayId==1', 1, 10).subscribe((data) => {
          expect(data.rowCount).toBeGreaterThanOrEqual(1);
          done();
        });
      });
    });
  });
});
