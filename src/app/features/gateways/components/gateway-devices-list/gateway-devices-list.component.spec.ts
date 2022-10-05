import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayDevicesListComponent } from './gateway-devices-list.component';

describe('GatewayDevicesListComponent', () => {
  let component: GatewayDevicesListComponent;
  let fixture: ComponentFixture<GatewayDevicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayDevicesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GatewayDevicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
