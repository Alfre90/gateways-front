import { Injectable } from '@angular/core';
import { IAddDevice } from '@features/devices/interfaces/add-device';
import { IDevice } from '@features/devices/interfaces/device';
import { Store } from '@ngrx/store';

import * as DevicesActions from '../states/devices/devices.actions';
import * as DevicesSelector from '../states/devices/devices.selectors';

@Injectable({
  providedIn: 'root'
})
export class DevicesStoreService {
  allDevices$ = this._store.select(DevicesSelector.selectAllDevices);
  selectedDevice$ = this._store.select(DevicesSelector.selectDeviceSelected);
  loading$ = this._store.select(DevicesSelector.selectLoading);

  constructor(private _store: Store) {}

  loadDevices(sorts = '', filters = '', page = 1, pageSize = 15) {
    this._store.dispatch(
      DevicesActions.loadDevices({ sorts, filters, page, pageSize })
    );
  }

  loadDevice(uid: number) {
    this._store.dispatch(DevicesActions.loadDevice({ uid }));
  }

  addDevice(device: IAddDevice) {
    this._store.dispatch(DevicesActions.addDevice({ device }));
  }

  editDevice(device: IDevice) {
    this._store.dispatch(DevicesActions.editDevice({ device }));
  }

  deleteDevice(uid: number) {
    this._store.dispatch(DevicesActions.deleteDevice({ uid }));
  }
}
