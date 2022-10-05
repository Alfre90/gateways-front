import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewaysListComponent } from './components/gateways-list/gateways-list.component';
import { MaterialModule } from '@core/material/material.module';
import { GatewayItemComponent } from './components/gateway-item/gateway-item.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { AddGatewayModalComponent } from './components/add-gateway-modal/add-gateway-modal.component';

@NgModule({
  declarations: [
    GatewaysListComponent,
    GatewayItemComponent,
    AddGatewayModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  exports: [GatewaysListComponent]
})
export class GatewaysModule {}
