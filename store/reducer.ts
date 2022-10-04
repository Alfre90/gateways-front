import { ActionReducerMap } from '@ngrx/store';
import * as fromFriends from './states';

export interface State {
  friends: fromFriends.State;
}

export const reducers: ActionReducerMap<State> = {
  friends: fromFriends.reducer,
};

export const metaReducers = [];
