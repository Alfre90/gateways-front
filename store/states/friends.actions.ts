import { createAction, props } from '@ngrx/store';
import { Friend } from 'src/app/interfaces/friend';

export const loadFriends = createAction(
  '[Friends] Load Friends',
  props<{
    skip: number;
    take: number;
    filters: string;
  }>()
);

export const loadFriendsSuccess = createAction(
  '[Friends] Load Friends Success',
  props<{ friends: Friend[] }>()
);

export const loadFriendsFailure = createAction(
  '[Friends] Load Friends Failure',
  props<{ error: any }>()
);

export const loadFriend = createAction(
  '[Friends] Load Friend',
  props<{ id: number }>()
);
export const loadFriendSuccess = createAction(
  '[Friends] Load Friend Success',
  props<{ friend: Friend }>()
);
export const loadFriendFailure = createAction(
  '[Friends] Load Friend Failure',
  props<{ error: any }>()
);
