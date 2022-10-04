import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewaysListComponent } from './components/gateways-list/gateways-list.component';

@NgModule({
  declarations: [GatewaysListComponent],
  imports: [CommonModule],
  exports: [GatewaysListComponent]
})
export class GatewaysModule {}
