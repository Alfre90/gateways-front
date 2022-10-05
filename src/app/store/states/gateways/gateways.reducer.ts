import { IGateway } from '@features/gateways/interfaces/gateway';
import { GatewayModel } from '@features/gateways/models/gateway';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as GatewayActions from './gateways.actions';

export const gatewaysFeatureKey = 'gateways';

export interface State extends EntityState<GatewayModel> {
  selected?: number;
  total: number;
  loading: boolean;
}

export const adapter = createEntityAdapter<GatewayModel>();

export const initialState: State = adapter.getInitialState({
  total: 0,
  loading: false
});

export const reducer = createReducer(
  initialState,

  // Get all gateways
  on(GatewayActions.loadGateways, (state) => ({ ...state, loading: true })),
  on(GatewayActions.loadGatewaysSuccess, (state, { gateways, totalItems }) =>
    adapter.setAll(gateways, {
      ...state,
      total: totalItems,
      loading: false
    })
  ),
  on(GatewayActions.loadGatewaysFailure, (state, action) => ({
    ...state,
    loading: false
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
  })),

  // Add gateway
  on(GatewayActions.addGateway, (state) => ({ ...state })),
  on(GatewayActions.addGatewaySuccess, (state, { gateway }) =>
    adapter.addOne(new GatewayModel({ ...gateway }), {
      ...state
    })
  ),
  on(GatewayActions.addGatewayFailure, (state) => ({ ...state })),

  // Edit gateway,
  on(GatewayActions.editGateway, (state) => ({ ...state })),
  on(GatewayActions.editGatewaySuccess, (state, { gateway }) =>
    adapter.upsertOne(new GatewayModel(gateway), { ...state })
  ),
  on(GatewayActions.editGatewayFailure, (state) => ({ ...state })),

  // Delete gateway
  on(GatewayActions.deleteGateway, (state) => ({ ...state })),
  on(GatewayActions.deleteGatewaySuccess, (state, { id }) =>
    adapter.removeOne(id, {
      ...state
    })
  ),
  on(GatewayActions.deleteGatewayFailure, (state) => ({ ...state }))
);
