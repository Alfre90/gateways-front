import { NgModule } from '@angular/core';
import { environment } from '@environment/environment';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './reducer';
import { DevicesStoreService } from './services/devices-store.service';
import { GatewaysStoreService } from './services/gateways-store.service';
import { DevicesStoreModule } from './states/devices';
import { DevicesEffects } from './states/devices/devices.effects';
import { GatewaysStoreModule } from './states/gateways';
import { GatewaysEffects } from './states/gateways/gateways.effects';

// Global store to have all the data and any component
//  that need it, just have to get it from the store

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([GatewaysEffects, DevicesEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    GatewaysStoreModule,
    DevicesStoreModule
  ],
  providers: [Store, GatewaysStoreService, DevicesStoreService]
})
export class AppStoreModule {}
