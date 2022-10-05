export interface IAddDevice {
  gatewayId: number;
  vendor: string;
  created: Date | string | null;
  status: boolean;
}
