import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'gateways/:id',
        loadChildren: () =>
          import('../gateway-details-page/gateway-details-page.module').then(
            (m) => m.GatewayDetailsPageModule
          )
      },
      {
        path: 'gateways',
        loadChildren: () =>
          import('../gateways-page/gateways-page.module').then(
            (m) => m.GatewaysPageModule
          )
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard-page/dashboard-page.module').then(
            (m) => m.DashboardPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
