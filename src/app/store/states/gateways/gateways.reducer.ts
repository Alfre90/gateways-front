import { IGateway } from '@features/gateways/interfaces/gateway';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as GatewayActions from './gateways.actions';

export const gatewaysFeatureKey = 'gateways';

export interface State extends EntityState<IGateway> {
  selected?: number;
}

export const adapter = createEntityAdapter<IGateway>();

export const initialState: State = adapter.getInitialState();

export const reducer = createReducer(
  initialState,

  // Get all friens
  on(GatewayActions.loadGateways, (state) => ({ ...state })),
  on(GatewayActions.loadGatewaysSuccess, (state, { gateways }) =>
    adapter.upsertMany(gateways, {
      ...state
    })
  ),
  on(GatewayActions.loadGatewaysFailure, (state, action) => ({
    ...state
  })),

  // Get selected gateway
  on(GatewayActions.loadGateway, (state, { id }) => ({
    ...state,
    selected: id
  })),
  on(GatewayActions.loadGatewaySuccess, (state, { gateway }) =>
    adapter.upsertOne(gateway, { ...state })
  ),
  on(GatewayActions.loadGatewayFailure, (state, { error }) => ({
    ...state
  }))
);
