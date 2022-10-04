import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewaysPageComponent } from './gateways-page.component';

const routes: Routes = [{ path: '', component: GatewaysPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewaysPageRoutingModule {}
