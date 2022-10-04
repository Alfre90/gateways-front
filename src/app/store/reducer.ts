import { ActionReducerMap } from '@ngrx/store';
import * as fromGateways from './states/gateways';

export interface State {
  friends: fromGateways.State;
}

export const reducers: ActionReducerMap<State> = {
  friends: fromGateways.reducer
};

export const metaReducers = [];
