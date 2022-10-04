import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewayDetailsPageComponent } from './gateway-details-page.component';
import { GatewayDetailsPageRoutingModule } from './gateway-details-page-routing.module';

@NgModule({
  declarations: [GatewayDetailsPageComponent],
  imports: [CommonModule, GatewayDetailsPageRoutingModule]
})
export class GatewayDetailsPageModule {}
