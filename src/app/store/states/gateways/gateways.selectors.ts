import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGateways from './gateways.reducer';

export const selectGatewaysState = createFeatureSelector<fromGateways.State>(
  fromGateways.gatewaysFeatureKey
);

export const { selectAll: selectAllGateways } =
  fromGateways.adapter.getSelectors(selectGatewaysState);

export const selectGatewaySelected = createSelector(
  selectGatewaysState,
  (state) => state.entities[state.selected!]
);
