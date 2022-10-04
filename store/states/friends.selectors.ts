import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFriends from './friends.reducer';

export const selectFriendsState = createFeatureSelector<fromFriends.State>(
  fromFriends.friendsFeatureKey
);

export const { selectAll: selectAllFriends } =
  fromFriends.adapter.getSelectors(selectFriendsState);

export const selectFriendSelected = createSelector(
  selectFriendsState,
  (state) => state.entities[state.selected!]
);
