import { Injectable } from '@angular/core';
import { GatewaysService } from '@features/gateways/services/gateways.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import * as GatewaysActions from './gateways.actions';

@Injectable()
export class GatewaysEffects {
  loadFriends$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GatewaysActions.loadGateways),
      concatMap(({ skip, take, filters }) =>
        this.gatewayService.getAll(skip, take, filters).pipe(
          map((gateways) => GatewaysActions.loadGatewaysSuccess({ gateways })),
          catchError((error) =>
            of(GatewaysActions.loadGatewaysFailure({ error }))
          )
        )
      )
    );
  });

  loadFriend$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GatewaysActions.loadGateway),
      concatMap(({ id }) =>
        this.gatewayService.getById().pipe(
          map((gateway) => GatewaysActions.loadGatewaySuccess({ gateway })),
          catchError((error) =>
            of(GatewaysActions.loadGatewayFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private gatewayService: GatewaysService
  ) {}
}
