import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDevices from './devices.reducer';

export const selectDevicesState = createFeatureSelector<fromDevices.State>(
  fromDevices.devicesFeatureKey
);

export const { selectAll: selectAllDevices } =
  fromDevices.adapter.getSelectors(selectDevicesState);

export const selectDeviceSelected = createSelector(
  selectDevicesState,
  (state) => state.entities[state.selected!]
);

export const selectLoading = createSelector(
  selectDevicesState,
  (state) => state.loading
);
