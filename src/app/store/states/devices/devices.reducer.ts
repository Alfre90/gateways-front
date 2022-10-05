import { DeviceModel } from '@features/devices/models/device';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as DevicesActions from './devices.actions';

export const devicesFeatureKey = 'devices';

export interface State extends EntityState<DeviceModel> {
  selected?: number;
  loading: boolean;
}

export const adapter = createEntityAdapter<DeviceModel>();

export const initialState: State = adapter.getInitialState({
  loading: false
});

export const reducer = createReducer(
  initialState,

  // Get all devices
  on(DevicesActions.loadDevices, (state) => ({ ...state, loading: true })),
  on(DevicesActions.loadDevicesSuccess, (state, { devices }) =>
    adapter.setAll(devices, {
      ...state,
      loading: false
    })
  ),
  on(DevicesActions.loadDevicesFailure, (state, action) => ({
    ...state,
    loading: false
  })),

  // Get selected device
  on(DevicesActions.loadDevice, (state, { uid }) => ({
    ...state,
    selected: uid
  })),
  on(DevicesActions.loadDeviceSuccess, (state, { device }) =>
    adapter.upsertOne(new DeviceModel({ ...device }), { ...state })
  ),
  on(DevicesActions.loadDeviceFailure, (state, { error }) => ({
    ...state
  })),

  // Add device
  on(DevicesActions.addDevice, (state) => ({ ...state })),
  on(DevicesActions.addDeviceSuccess, (state, { device }) =>
    adapter.addOne(new DeviceModel({ ...device }), {
      ...state
    })
  ),
  on(DevicesActions.addDeviceFailure, (state) => ({ ...state })),

  // Edit device,
  on(DevicesActions.editDevice, (state) => ({ ...state })),
  on(DevicesActions.editDeviceSuccess, (state, { device }) =>
    adapter.upsertOne(new DeviceModel(device), { ...state })
  ),
  on(DevicesActions.editDevice, (state) => ({ ...state })),

  // Delete device
  on(DevicesActions.deleteDevice, (state) => ({ ...state })),
  on(DevicesActions.deleteDeviceSuccess, (state, { uid }) =>
    adapter.removeOne(uid, {
      ...state
    })
  ),
  on(DevicesActions.deleteDeviceFailure, (state) => ({ ...state }))
);
