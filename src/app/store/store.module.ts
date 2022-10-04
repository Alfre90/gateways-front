import { NgModule } from '@angular/core';
import { environment } from '@environment/environment';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './reducer';
import { GatewaysStoreService } from './services/gateways-store.service';
import { GatewaysStoreModule } from './states/gateways';
import { GatewaysEffects } from './states/gateways/gateways.effects';

// Global store to have all the data and any component
//  that need it, just have to get it from the store

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([GatewaysEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    GatewaysStoreModule
  ],
  providers: [Store, GatewaysStoreService]
})
export class AppStoreModule {}
