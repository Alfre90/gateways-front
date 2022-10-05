import { GatewayModel } from '@features/gateways/models/gateway';
import { IDevice } from '../interfaces/device';

export class DeviceModel {
  id?: number;
  uid: number;
  gatewayId: number;
  vendor: string;
  created: Date | string | null;
  status: boolean;
  gateway?: GatewayModel;

  constructor(
    device: IDevice = {
      uid: 0,
      gatewayId: 0,
      vendor: '',
      created: '',
      status: false,
      gateway: new GatewayModel()
    }
  ) {
    this.id = device.uid;
    this.uid = device.uid;
    this.gatewayId = device.gatewayId;
    this.vendor = device.vendor;
    this.created = device.created;
    this.status = device.status;
    this.gateway = new GatewayModel(device.gateway);
  }
}
