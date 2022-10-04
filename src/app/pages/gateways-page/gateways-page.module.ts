import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewaysPageComponent } from './gateways-page.component';
import { GatewaysPageRoutingModule } from './gateways-page-routing.module';
import { GatewaysModule } from '@features/gateways/gateways.module';

@NgModule({
  declarations: [GatewaysPageComponent],
  imports: [CommonModule, GatewaysPageRoutingModule, GatewaysModule]
})
export class GatewaysPageModule {}
