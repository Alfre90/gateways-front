import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppStoreModule } from '@store/store.module';
import { IAddGateway } from '../interfaces/add-gateway';

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

  it('should create a device', (done: DoneFn) => {
    let gateway: IAddGateway = {
      name: 'Apple',
      serialNumber: (
        Math.floor(Math.random() * (100000 - 0 + 1)) + 0
      ).toString(),
      iPv4: '111.111.111.1'
    };
    service.addGateway(gateway).subscribe(() => {
      service.getAll('', '', 1, 10).subscribe((data) => {
        expect(data.rowCount).toBeGreaterThanOrEqual(1);
        done();
      });
    });
  });

  it('should get a gateway', (done: DoneFn) => {
    let gateway: IAddGateway = {
      name: 'Apple',
      serialNumber: (
        Math.floor(Math.random() * (100000 - 0 + 1)) + 0
      ).toString(),
      iPv4: '111.111.111.1'
    };
    service.addGateway(gateway).subscribe(({ id }) => {
      service.getById(id).subscribe((data) => {
        expect(data.id).toBe(id);
        done();
      });
    });
  });

  it('should remove a gateway', (done: DoneFn) => {
    let gateway: IAddGateway = {
      name: 'Apple',
      serialNumber: (
        Math.floor(Math.random() * (100000 - 0 + 1)) + 0
      ).toString(),
      iPv4: '111.111.111.1'
    };
    service.getAll('', '', 1, 10).subscribe((data) => {
      service.addGateway(gateway).subscribe(({ id }) => {
        service.deleteGateway(id).subscribe(() => {
          service.getAll('', '', 1, 10).subscribe((data2) => {
            expect(data.rowCount).toBe(data2.rowCount);
            done();
          });
        });
      });
    });
  });
});
