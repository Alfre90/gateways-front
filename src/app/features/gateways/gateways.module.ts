import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewaysListComponent } from './components/gateways-list/gateways-list.component';
import { MaterialModule } from '@core/material/material.module';
import { GatewayItemComponent } from './components/gateway-item/gateway-item.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { AddGatewayModalComponent } from './components/add-gateway-modal/add-gateway-modal.component';
import { GatewayLayoutComponent } from './layouts/gateway-layout/gateway-layout.component';
import { GatewayHeaderComponent } from './components/gateway-header/gateway-header.component';
import { GatewayDevicesListComponent } from './components/gateway-devices-list/gateway-devices-list.component';
import { DevicesModule } from '@features/devices/devices.module';

@NgModule({
  declarations: [
    GatewaysListComponent,
    GatewayItemComponent,
    AddGatewayModalComponent,
    GatewayLayoutComponent,
    GatewayHeaderComponent,
    GatewayDevicesListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    DevicesModule
  ],
  exports: [GatewaysListComponent, GatewayLayoutComponent]
})
export class GatewaysModule {}
