import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Friend } from 'src/app/interfaces/friend';
import * as FriendActions from './friends.actions';

export const friendsFeatureKey = 'friends';

export interface State extends EntityState<Friend> {
  selected?: number;
}

export const adapter = createEntityAdapter<Friend>();

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,

  // Get all friens
  on(FriendActions.loadFriends, (state) => ({ ...state })),
  on(FriendActions.loadFriendsSuccess, (state, { friends }) =>
    adapter.upsertMany(friends, {
      ...state,
    })
  ),
  on(FriendActions.loadFriendsFailure, (state, action) => ({
    ...state,
  })),

  // Get selected friend
  on(FriendActions.loadFriend, (state, { id }) => ({
    ...state,
    selected: id,
  })),
  on(FriendActions.loadFriendSuccess, (state, { friend }) =>
    adapter.upsertOne(friend, { ...state })
  ),
  on(FriendActions.loadFriendFailure, (state, { error }) => ({
    ...state,
  }))
);
