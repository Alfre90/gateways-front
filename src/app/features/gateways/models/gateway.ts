import { IGateway } from '../interfaces/gateway';

export class GatewayModel {
  id: number;
  serialNumber: string;
  name: string;
  ipv4: string;

  constructor(
    gateway: IGateway = {
      id: 0,
      serialNumber: '',
      name: '',
      ipv4: ''
    }
  ) {
    this.id = gateway.id;
    this.serialNumber = gateway.serialNumber;
    this.name = gateway.name;
    this.ipv4 = gateway.ipv4;
  }
}
