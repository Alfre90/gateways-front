import { IAddDevice } from '@features/devices/interfaces/add-device';
import { IDevice } from '@features/devices/interfaces/device';
import { DeviceModel } from '@features/devices/models/device';
import { createAction, props } from '@ngrx/store';

export const loadDevices = createAction(
  '[Devices] Load Devices',
  props<{
    sorts: string;
    filters: string;
    page: number;
    pageSize: number;
  }>()
);

export const loadDevicesSuccess = createAction(
  '[Devices] Load Devices Success',
  props<{ devices: DeviceModel[] }>()
);

export const loadDevicesFailure = createAction(
  '[Devices] Load Devices Failure',
  props<{ error: any }>()
);

export const loadDevice = createAction(
  '[Devices] Load Device',
  props<{ uid: number }>()
);
export const loadDeviceSuccess = createAction(
  '[Devices] Load Device Success',
  props<{ device: IDevice }>()
);
export const loadDeviceFailure = createAction(
  '[Devices] Load Device Failure',
  props<{ error: any }>()
);

export const addDevice = createAction(
  '[Devices] Add Device',
  props<{ device: IAddDevice }>()
);
export const addDeviceSuccess = createAction(
  '[Devices] Add Device Success',
  props<{ device: IDevice }>()
);
export const addDeviceFailure = createAction(
  '[Devices] Add Device Failure',
  props<{ error: any }>()
);

export const editDevice = createAction(
  '[Devices] Edit Device',
  props<{ device: IDevice }>()
);
export const editDeviceSuccess = createAction(
  '[Devices] Edit Device Success',
  props<{ device: IDevice }>()
);
export const editDeviceFailure = createAction(
  '[Devices] Edit Device Failure',
  props<{ error: any }>()
);

export const deleteDevice = createAction(
  '[Devices] Delete Device',
  props<{ uid: number }>()
);
export const deleteDeviceSuccess = createAction(
  '[Devices] Delete Device Success',
  props<{ uid: number }>()
);
export const deleteDeviceFailure = createAction(
  '[Devices] Delete Device Failure',
  props<{ error: any }>()
);
