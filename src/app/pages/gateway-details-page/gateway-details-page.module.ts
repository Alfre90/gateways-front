import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewayDetailsPageComponent } from './gateway-details-page.component';
import { GatewayDetailsPageRoutingModule } from './gateway-details-page-routing.module';
import { GatewaysModule } from '@features/gateways/gateways.module';

@NgModule({
  declarations: [GatewayDetailsPageComponent],
  imports: [CommonModule, GatewayDetailsPageRoutingModule, GatewaysModule]
})
export class GatewayDetailsPageModule {}
