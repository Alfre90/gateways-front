import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DevicesEffects } from './devices.effects';
import * as fromDevices from './devices.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromDevices.devicesFeatureKey, fromDevices.reducer),
    EffectsModule.forFeature([DevicesEffects])
  ]
})
export class DevicesStoreModule {}
