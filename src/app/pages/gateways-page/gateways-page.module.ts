import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewaysPageComponent } from './gateways-page.component';
import { GatewaysPageRoutingModule } from './gateways-page-routing.module';

@NgModule({
  declarations: [GatewaysPageComponent],
  imports: [CommonModule, GatewaysPageRoutingModule]
})
export class GatewaysPageModule {}
