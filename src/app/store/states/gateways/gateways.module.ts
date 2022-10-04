import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { GatewaysEffects } from './gateways.effects';
import * as fromGateways from './gateways.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromGateways.gatewaysFeatureKey,
      fromGateways.reducer
    ),
    EffectsModule.forFeature([GatewaysEffects])
  ]
})
export class GatewaysStoreModule {}
