import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedResult } from '@core/models/paged-result';
import { AppToastService } from '@core/services/toast.service';
import { GatewayModel } from '@features/gateways/models/gateway';
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
      concatMap(({ sorts, filters, page, pageSize }) =>
        this.gatewayService.getAll(sorts, filters, page, pageSize).pipe(
          map((results: PagedResult) =>
            GatewaysActions.loadGatewaysSuccess({
              gateways: results.results as GatewayModel[],
              totalItems: results.rowCount
            })
          ),
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

  addGateway$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GatewaysActions.addGateway),
      concatMap(({ gateway }) =>
        this.gatewayService.addGateway(gateway).pipe(
          map(({ id }) => {
            this.toastService.show('Gateway added succesfully', {
              classname: 'bg-success text-light',
              delay: 2000
            });
            return GatewaysActions.addGatewaySuccess({
              gateway: {
                ...gateway,
                id
              }
            });
          }),
          catchError((error: HttpErrorResponse) => {
            this.toastService.show(error?.error?.split(':')[1].split('.')[0], {
              classname: 'bg-danger text-light',
              delay: 5000
            });
            return of(GatewaysActions.addGatewayFailure({ error }));
          })
        )
      )
    )
  );

  editGateway$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GatewaysActions.editGateway),
      concatMap(({ gateway }) =>
        this.gatewayService.editGateway(gateway).pipe(
          map(() => {
            this.toastService.show('Gateway edited succesfully', {
              classname: 'bg-success text-light',
              delay: 2000
            });
            return GatewaysActions.editGatewaySuccess({ gateway });
          }),
          catchError((error: HttpErrorResponse) => {
            this.toastService.show(error?.error?.split(':')[1].split('.')[0], {
              classname: 'bg-danger text-light',
              delay: 5000
            });
            return of(GatewaysActions.editGatewayFailure({ error }));
          })
        )
      )
    )
  );

  deleteGateway$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GatewaysActions.deleteGateway),
      concatMap(({ id }) =>
        this.gatewayService.deleteGateway(id).pipe(
          map(() => {
            this.toastService.show('Gateway deleted succesfully', {
              classname: 'bg-success text-light',
              delay: 2000
            });
            return GatewaysActions.deleteGatewaySuccess({ id });
          }),
          catchError((error: HttpErrorResponse) => {
            this.toastService.show(error?.error?.split(':')[1].split('.')[0], {
              classname: 'bg-danger text-light',
              delay: 5000
            });
            return of(GatewaysActions.deleteGatewayFailure({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private gatewayService: GatewaysService,
    private toastService: AppToastService
  ) {}
}
