import { IGateway } from '@features/gateways/interfaces/gateway';
import { createAction, props } from '@ngrx/store';

export const loadGateways = createAction(
  '[Gateways] Load Gateways',
  props<{
    skip: number;
    take: number;
    filters: string;
  }>()
);

export const loadGatewaysSuccess = createAction(
  '[Gateways] Load Gateways Success',
  props<{ gateways: IGateway[] }>()
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
