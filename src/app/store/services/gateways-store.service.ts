import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as GatewaysActions from '../states/gateways/gateways.actions';
import * as GatewaysSelector from '../states/gateways/gateways.selectors';

@Injectable({
  providedIn: 'root'
})
export class GatewaysStoreService {
  sllGateways$ = this._store.select(GatewaysSelector.selectAllGateways);
  selectedGateway$ = this._store.select(GatewaysSelector.selectGatewaySelected);

  constructor(private _store: Store) {}

  loadGateways(skip = 1, take = 15, filters = '') {
    this._store.dispatch(GatewaysActions.loadGateways({ skip, take, filters }));
  }

  loadGateway(id: number) {
    this._store.dispatch(GatewaysActions.loadGateway({ id }));
  }
}
