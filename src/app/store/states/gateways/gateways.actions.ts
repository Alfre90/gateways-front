import { IAddGateway } from '@features/gateways/interfaces/add-gateway';
import { IGateway } from '@features/gateways/interfaces/gateway';
import { GatewayModel } from '@features/gateways/models/gateway';
import { createAction, props } from '@ngrx/store';

export const loadGateways = createAction(
  '[Gateways] Load Gateways',
  props<{
    sorts: string;
    filters: string;
    page: number;
    pageSize: number;
  }>()
);

export const loadGatewaysSuccess = createAction(
  '[Gateways] Load Gateways Success',
  props<{ gateways: GatewayModel[]; totalItems: number }>()
);

export const loadGatewaysFailure = createAction(
  '[Gateways] Load Gateways Failure',
  props<{ error: any }>()
);

export const loadGateway = createAction(
  '[Gateways] Load Gateway',
  props<{ id: number }>()
);
export const loadGatewaySuccess = createAction(
  '[Gateways] Load Gateway Success',
  props<{ gateway: IGateway }>()
);
export const loadGatewayFailure = createAction(
  '[Gateways] Load Gateway Failure',
  props<{ error: any }>()
);

export const addGateway = createAction(
  '[Gateways] Add Gateway',
  props<{ gateway: IAddGateway }>()
);
export const addGatewaySuccess = createAction(
  '[Gateways] Add Gateway Success',
  props<{ gateway: IGateway }>()
);
export const addGatewayFailure = createAction(
  '[Gateways] Add Gateway Failure',
  props<{ error: any }>()
);

export const editGateway = createAction(
  '[Gateways] Edit Gateway',
  props<{ gateway: IGateway }>()
);
export const editGatewaySuccess = createAction(
  '[Gateways] Edit Gateway Success',
  props<{ gateway: IGateway }>()
);
export const editGatewayFailure = createAction(
  '[Gateways] Edit Gateway Failure',
  props<{ error: any }>()
);

export const deleteGateway = createAction(
  '[Gateways] Delete Gateway',
  props<{ id: number }>()
);
export const deleteGatewaySuccess = createAction(
  '[Gateways] Delete Gateway Success',
  props<{ id: number }>()
);
export const deleteGatewayFailure = createAction(
  '[Gateways] Delete Gateway Failure',
  props<{ error: any }>()
);
