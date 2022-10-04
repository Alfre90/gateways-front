import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FriendsEffects } from './friends.effects';
import * as fromFriends from './friends.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromFriends.friendsFeatureKey, fromFriends.reducer),
    EffectsModule.forFeature([FriendsEffects]),
  ],
})
export class FriendsStoreModule {}
