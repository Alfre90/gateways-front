import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { metaReducers, reducers } from './reducer';
import { FriendsStoreService } from './services/friend-store.service';
import { FriendsStoreModule } from './states';
import { FriendsEffects } from './states/friends.effects';

// Global store to have all the data and any component
//  that need it, just have to get it from the store

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([FriendsEffects]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    FriendsStoreModule,
  ],
  providers: [Store, FriendsStoreService],
})
export class AppStoreModule {}
