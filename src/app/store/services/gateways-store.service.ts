import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as GatewaysActions from '../states/gateways/gateways.actions';
import * as GatewaysSelector from '../states/gateways/gateways.selectors';

@Injectable({
  providedIn: 'root'
})
export class GatewaysStoreService {
  allGateways$ = this._store.select(GatewaysSelector.selectAllGateways);
  selectedGateway$ = this._store.select(GatewaysSelector.selectGatewaySelected);
  totalItems$ = this._store.select(GatewaysSelector.selectTotalItems);

  constructor(private _store: Store) {}

  loadGateways(sorts = '', filters = '', page = 1, pageSize = 15) {
    this._store.dispatch(
      GatewaysActions.loadGateways({ sorts, filters, page, pageSize })
    );
  }

  loadGateway(id: number) {
    this._store.dispatch(GatewaysActions.loadGateway({ id }));
  }
}
