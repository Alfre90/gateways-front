import { Component, Input, OnInit } from '@angular/core';
import { GatewayModel } from '@features/gateways/models/gateway';
import { Location } from '@angular/common';

@Component({
  selector: 'gw-gateway-header',
  templateUrl: './gateway-header.component.html',
  styleUrls: ['./gateway-header.component.scss']
})
export class GatewayHeaderComponent implements OnInit {
  @Input() gateway: GatewayModel = new GatewayModel();

  constructor(public location: Location) {}

  ngOnInit(): void {}
}
