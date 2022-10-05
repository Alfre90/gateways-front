import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PagedResult } from '@core/models/paged-result';
import { AppToastService } from '@core/services/toast.service';
import { DeviceModel } from '@features/devices/models/device';
import { DevicesService } from '@features/devices/services/devices.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';

import * as DevicesActions from './devices.actions';

@Injectable()
export class DevicesEffects {
  loadDevices$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DevicesActions.loadDevices),
      concatMap(({ sorts, filters, page, pageSize }) =>
        this.devicesService.getAll(sorts, filters, page, pageSize).pipe(
          map((results: PagedResult) =>
            DevicesActions.loadDevicesSuccess({
              devices: results.results as DeviceModel[]
            })
          ),
          catchError((error) =>
            of(DevicesActions.loadDevicesFailure({ error }))
          )
        )
      )
    );
  });

  loadDevice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DevicesActions.loadDevice),
      concatMap(({ uid }) =>
        this.devicesService.getById(uid).pipe(
          map((device) => DevicesActions.loadDeviceSuccess({ device })),
          catchError((error) => of(DevicesActions.loadDeviceFailure({ error })))
        )
      )
    );
  });

  addDevice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DevicesActions.addDevice),
      concatMap(({ device }) =>
        this.devicesService.addDevice(device).pipe(
          map(({ uid }) => {
            this.toastService.show('Device added succesfully', {
              classname: 'bg-success text-light',
              delay: 2000
            });
            return DevicesActions.addDeviceSuccess({
              device: {
                ...device,
                uid
              }
            });
          }),
          catchError((error: HttpErrorResponse) => {
            this.toastService.show(error?.error?.split(':')[1].split('.')[0], {
              classname: 'bg-danger text-light',
              delay: 5000
            });
            return of(DevicesActions.addDeviceFailure({ error }));
          })
        )
      )
    )
  );

  editDevice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DevicesActions.editDevice),
      concatMap(({ device }) =>
        this.devicesService.editDevice(device).pipe(
          map(() => {
            this.toastService.show('Device edited succesfully', {
              classname: 'bg-success text-light',
              delay: 2000
            });
            return DevicesActions.editDeviceSuccess({ device });
          }),
          catchError((error: HttpErrorResponse) => {
            this.toastService.show(error?.error?.split(':')[1].split('.')[0], {
              classname: 'bg-danger text-light',
              delay: 5000
            });
            return of(DevicesActions.editDeviceFailure({ error }));
          })
        )
      )
    )
  );

  deleteDevice$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DevicesActions.deleteDevice),
      concatMap(({ uid }) =>
        this.devicesService.deleteDevice(uid).pipe(
          map(() => {
            this.toastService.show('Device deleted succesfully', {
              classname: 'bg-success text-light',
              delay: 2000
            });
            return DevicesActions.deleteDeviceSuccess({ uid });
          }),
          catchError((error: HttpErrorResponse) => {
            this.toastService.show(error?.error?.split(':')[1].split('.')[0], {
              classname: 'bg-danger text-light',
              delay: 5000
            });
            return of(DevicesActions.deleteDeviceFailure({ error }));
          })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private devicesService: DevicesService,
    private toastService: AppToastService
  ) {}
}
