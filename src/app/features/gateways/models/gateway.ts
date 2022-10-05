import { IGateway } from '../interfaces/gateway';

export class GatewayModel {
  id: number;
  serialNumber: string;
  name: string;
  iPv4: string;

  constructor(
    gateway: IGateway = {
      id: 0,
      serialNumber: '',
      name: '',
      iPv4: ''
    }
  ) {
    this.id = gateway.id;
    this.serialNumber = gateway.serialNumber;
    this.name = gateway.name;
    this.iPv4 = gateway.iPv4;
  }
}
