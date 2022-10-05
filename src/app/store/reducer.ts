import { ActionReducerMap } from '@ngrx/store';
import * as fromGateways from './states/gateways';
import * as fromDevices from './states/devices';

export interface State {
  gateways: fromGateways.State;
  devices: fromDevices.State;
}

export const reducers: ActionReducerMap<State> = {
  gateways: fromGateways.reducer,
  devices: fromDevices.reducer
};

export const metaReducers = [];
