import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AddDeviceModalComponent } from '@features/devices/components/add-device-modal/add-device-modal.component';
import { DeviceModel } from '@features/devices/models/device';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Actions } from '@ngrx/effects';
import { ConfirmModalComponent } from '@shared/components/confirm-modal/confirm-modal.component';
import { DevicesStoreService } from '@store/services/devices-store.service';
import * as DevicesActions from '@store/states/devices/devices.actions';
import { filter, take } from 'rxjs';

@Component({
  selector: 'gw-gateway-devices-list',
  templateUrl: './gateway-devices-list.component.html',
  styleUrls: ['./gateway-devices-list.component.scss']
})
export class GatewayDevicesListComponent implements OnInit {
  @Input() gatewayId: number = -1;
  devicesList$ = this.devicesService.allDevices$;
  loading$ = this.devicesService.loading$;

  saving: boolean = false;
  isEdit: boolean = false;
  deleting: boolean = false;

  @ViewChild('confirmModal') confirmModal!: ConfirmModalComponent;
  @ViewChild('addDeviceModal') addDeviceModal!: AddDeviceModalComponent;

  constructor(
    private devicesService: DevicesStoreService,
    private actions$: Actions,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadDevices();
  }

  loadDevices() {
    this.devicesService.loadDevices('', 'GatewayId==' + this.gatewayId, 1, 10);
  }

  addDevice() {
    this.isEdit = false;
    this.addDeviceModal.open();
  }

  saveDevice(formData: any) {
    this.saving = true;
    if (!this.isEdit) {
      this.devicesService.addDevice(formData.value);
    } else {
      this.devicesService.editDevice(formData.value);
    }
    this.actions$
      .pipe(
        filter(
          (action) =>
            action.type === DevicesActions.addDeviceSuccess.type ||
            action.type === DevicesActions.addDeviceFailure.type ||
            action.type === DevicesActions.editDeviceSuccess.type ||
            action.type === DevicesActions.editDeviceFailure.type
        ),
        take(1)
      )
      .subscribe((action) => {
        if (
          action.type === DevicesActions.addDeviceSuccess.type ||
          action.type === DevicesActions.editDeviceSuccess.type
        ) {
          if (this.saving) {
            this.saving = false;
          }
          this.addDeviceModal.addDeviceForm.reset();
          this.modalService.dismissAll();
          this.loadDevices();
        } else if (
          action.type === DevicesActions.addDeviceFailure.type ||
          action.type === DevicesActions.editDeviceFailure.type
        ) {
          if (this.saving) {
            this.saving = false;
          }
        }
      });
  }

  deviceEdit(device: DeviceModel) {
    this.isEdit = true;
    this.addDeviceModal.open(device);
  }

  deviceDelete(device: DeviceModel) {
    this.confirmModal.open(device.uid);
  }

  deleteDevice(id: number) {
    this.devicesService.deleteDevice(id);
    this.actions$
      .pipe(
        filter(
          (action) =>
            action.type === DevicesActions.deleteDeviceSuccess.type ||
            action.type === DevicesActions.deleteDeviceFailure.type
        ),
        take(1)
      )
      .subscribe((action) => {
        if (action.type === DevicesActions.deleteDeviceSuccess.type) {
          if (this.deleting) {
            this.deleting = false;
          }
          this.modalService.dismissAll();
          this.loadDevices();
        } else if (action.type === DevicesActions.deleteDeviceFailure.type) {
          if (this.saving) {
            this.deleting = false;
          }
        }
      });
  }
}
