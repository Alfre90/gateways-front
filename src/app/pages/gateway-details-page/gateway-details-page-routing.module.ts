import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GatewayDetailsPageComponent } from './gateway-details-page.component';

const routes: Routes = [{ path: '', component: GatewayDetailsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewayDetailsPageRoutingModule {}
