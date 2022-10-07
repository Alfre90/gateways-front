import * as fromGateways from './gateways.reducer';
import * as fromActions from './gateways.actions';
import { GatewayModel } from '@features/gateways/models/gateway';

describe('Gateways Reducer', () => {
  it('should set loading to true', () => {
    const { initialState } = fromGateways;
    const action = fromActions.loadGateways({
      sorts: '',
      filters: '',
      page: 1,
      pageSize: 10
    });
    const state = fromGateways.reducer(initialState, action);

    expect(state.loading).toEqual(true);
  });

  it('should populate entities from the array', () => {
    const gateways: GatewayModel[] = [
      {
        id: 1,
        name: 'Gateway #1',
        serialNumber: (Math.random() * 100000).toString(),
        iPv4: '111.11.11.1'
      },
      {
        id: 2,
        name: 'Gateway #2',
        serialNumber: (Math.random() * 100000).toString(),
        iPv4: '111.11.11.2'
      }
    ];
    const entities = {
      1: gateways[0],
      2: gateways[1]
    };
    const { initialState } = fromGateways;
    const action = fromActions.loadGatewaysSuccess({
      gateways,
      totalItems: gateways.length
    });
    const state = fromGateways.reducer(initialState, action);

    expect(state.loading).toEqual(false);
    expect(state.entities).toEqual(entities);
    expect(state.total).toEqual(gateways.length);
  });

  it('should return the previous state', () => {
    const { initialState } = fromGateways;
    const previousState = { ...initialState, loading: true };
    const action = fromActions.loadGatewaysFailure({ error: {} });
    const state = fromGateways.reducer(previousState, action);

    expect(state).toEqual(initialState);
  });

  it('should remove item from entities', () => {
    const gateway: GatewayModel = {
      id: 1,
      name: 'Gateway #1',
      serialNumber: (Math.random() * 100000).toString(),
      iPv4: '111.11.11.1'
    };
    const entities = {
      1: gateway
    };
    let { initialState } = fromGateways;
    initialState = { ...initialState, entities };
    const action = fromActions.deleteGatewaySuccess({
      id: 1
    });
    const state = fromGateways.reducer(initialState, action);

    expect(state.entities).toEqual({});
  });

  it('should get the item from selected', () => {
    const gateway: GatewayModel = {
      id: 1,
      name: 'Gateway #1',
      serialNumber: (Math.random() * 100000).toString(),
      iPv4: '111.11.11.1'
    };
    const entities = {
      1: gateway
    };
    let { initialState } = fromGateways;
    initialState = { ...initialState, entities };
    const action = fromActions.loadGateway({
      id: 1
    });
    const state = fromGateways.reducer(initialState, action);

    expect(state.selected).toBe(1);
  });
});
