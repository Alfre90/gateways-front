import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GatewaysListComponent } from './components/gateways-list/gateways-list.component';
import { MaterialModule } from '@core/material/material.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [GatewaysListComponent],
  imports: [CommonModule, MaterialModule, NgxPaginationModule],
  exports: [GatewaysListComponent]
})
export class GatewaysModule {}
