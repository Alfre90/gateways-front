import { IGateway } from '@features/gateways/interfaces/gateway';

export interface IDevice {
  uid: number;
  gatewayId: number;
  vendor: string;
  created: Date | string | null;
  status: boolean;
  gateway?: IGateway;
}
